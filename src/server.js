import http from 'node:http'
import { json } from './middlewares/json.js'

const users = []

const server = http.createServer(async (req, res) => {

    await json(req, res) // middleware

    const { method, url } = req

    if (method === 'GET' && url === '/') {
        return res.end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/') {
        const { name, email } = req.body

        users.push({
            id: 1,
            name,
            email
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3000)