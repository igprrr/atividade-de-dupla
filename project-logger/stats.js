const os = require('os')
const log = require('./logger')

setInterval(()=>{
    
    const { freemem, totalmem } = os

    const total = parseInt(totalmem()/1024/1024)
    const freeMem = parseInt(freemem()/1024/1024)
    const usage = 100 - parseInt((freeMem/total)*100)

    const stats = {
        total: `${total} MB`,
        freeMem: `${freeMem} MB`,
        usage: `${usage} %`
    }

    console.clear()
    console.log('+++++ MEMORY STATS +++++')
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)

}, 1000)

