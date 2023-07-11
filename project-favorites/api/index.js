const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')
const data = require('./urls.json')

http.createServer((req, res) => {

    // Extrai os parâmetros da URL
    const { name, url, del, editId } = URL.parse(req.url, true).query

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    // Função para escrever os dados no arquivo JSON
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

    // Verifica se nome e URL estão presentes na requisição
    if (!name || !url) {
        return res.end(JSON.stringify(data))
    }

    // Verifica se a requisição é para deletar um item
    if (del) {
        // Filtra os itens removendo o que tem a URL igual à informada
        data.urls = data.urls.filter(item => item.url != url)
        return writeFile(message => res.end(message))
    }

    // Verifica se a requisição é para editar um item
    if (editId) {
        // Encontra o índice do item a ser editado pelo ID
        const index = data.urls.findIndex(item => item.id == editId)
        if (index !== -1) {
            // Atualiza o nome e a URL do item
            data.urls[index].name = name
            data.urls[index].url = url
            return writeFile(message => res.end(message))
        }
    }

    // Cria um novo ID baseado no timestamp atual
    const id = Date.now()
    // Adiciona o novo item aos dados
    data.urls.push({ id, name, url })
    return writeFile(message => res.end(message))

}).listen(3000, () => console.log('API rodando...'))
