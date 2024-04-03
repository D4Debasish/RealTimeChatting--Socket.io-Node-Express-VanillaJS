const express = require('express');
const http = require("http");
const path = require("path");
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static(path.resolve("./public")));

app.get('/', (req,res)=>{
    res.sendFile('./Public/index.html')
})

io.on('connection', (socket) => {
   socket.on("user-message", (message)=>{
   
    io.emit('allmessage', message)
   })
  });


server.listen(8000,()=>  console.log(`server is runnign at:: htttp:${8000}`))