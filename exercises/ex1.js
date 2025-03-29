const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
  if (req) {
    console.log("A request")
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
  }
})

// port, callback that specifies a function to be executed when the listener is added
server.listen(3000, () => {
  console.log("Server is listening on port 3000...")
})
