const http = require('http')
const websocket = require('ws')
let server = http.createServer((req,res)=>{
    res.end("Server is running")
})

const wss = new websocket.Server({server})
wss.on("connection",(ws,result)=>{
    ws.send("Congratulation!")
    ws.on('message',(msg)=>{
        console.log(msg)
    })
})


server.listen(4000)