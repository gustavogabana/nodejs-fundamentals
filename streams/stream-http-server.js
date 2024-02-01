import http from 'node:http'
import { Transform } from 'node:stream'

class NegativeNumberStream extends Transform {
    _transform(chunk, encondig, callback) {
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed)

        callback(null, Buffer.from(String(transformed)))
    }
}

// req => Readable Stream
// res => Writable Stream
const server = http.createServer(async (req, res) =>  {

    const buffers = []

    // async/await 
    for await (const chunk of req) {
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString()

    console.log(fullStreamContent)

    return res.end(fullStreamContent)

})

server.listen(3000)