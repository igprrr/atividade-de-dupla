const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')
const data = require('./urls.json')

http.createServer((req, res) => {

    const { name, url, del, editId } = URL.parse(req.url, true).query

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    function writeFile(cb) {
        fs.writeFile(
            path.join(__dirname, 'urls.json'),
            JSON.stringify(data, null, 2),
            err => {
                if (err) throw err
                cb('Operação realizada com sucesso!')
            }
        )
    }

    if (!name || !url) {
        return res.end(JSON.stringify(data))
    }

    if (del) {
        data.urls = data.urls.filter(item => item.url != url)
        return writeFile(message => res.end(message))
    }

    if (editId) {
        const index = data.urls.findIndex(item => item.id == editId)
        if (index !== -1) {
            data.urls[index].name = name
            data.urls[index].url = url
            return writeFile(message => res.end(message))
        }
    }

    const id = Date.now()
    data.urls.push({ id, name, url })
    return writeFile(message => res.end(message))

}).listen(3000, () => console.log('API rodando...'))
