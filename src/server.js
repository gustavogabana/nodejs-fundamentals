import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// Query parameters: URL Stateful => Filters, pagination
// Route parameters: Resource identification
// Request body: Sending information (HTTPS)

// http://localhost:3000/users?userId=1&name=Gustavo
// GET/POST/DELETE http://localhost:3000/users/1



const server = http.createServer(async (req, res) => {

    await json(req, res) // middleware
    const { method, url } = req

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if (route) {
        const routeParams = req.url.match(route.path)

        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3000)