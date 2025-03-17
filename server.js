'use strict'

const http = require('http')
const data = require('./data')

const PORT = 3000
const HOSTNAME = 'localhost'

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        try {
            const response = await data()
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end(response)
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('Internal Server Error')
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Not Found')
    }
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
})