const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if(url === '/'){
        res.setHeader('Content-type', 'text/html')
        res.write('<h1><form action="/message" method="post"><input name="message" type="text"/><button type="submit">Submit</button></form></h1>')
        return res.end()
    }

    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk, 'chunk')
            body.push(chunk)
        })
        req.on('end',  () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            console.log(parsedBody, 'parsedBody')
            fs.writeFileSync('message.txt', message)
        })
        res.writeHead(302, {
            'Location': '/'
        })
        return res.end()
    }
    res.setHeader('Content-type', 'text/html')
    res.write('<h1>Hello form node.js</h1>')
    res.end()
})

server.listen(3000, () => {
    console.log('Listen...')
})