import app from './server'
import * as dotenv from 'dotenv'
dotenv.config()

app.listen(3001, ()=>{
  console.log("hello on port 3001")
})


// const http = require('http')
//
// const server = http.createServer(async (req,res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.statusCode= 200
//     console.log('hello from server')
//     res.end()
//   }
// })
//
//
// server.listen(3001, () => {
//   console.log("server on port 3001")
// })
//
