const express = require('express');

const app = express() ;
const http = require('http') ;
const { Socket } = require('socket.io');
const server = http.createServer(app);

const {Server} = require("socket.io");
const io = new Server(server);

app.get('/' , (req , res)=>{
      res.sendFile(__dirname + '/index.html');
}) ;

io.on('connection' , (socket) =>{
     socket.on('users message' , (msg)=>{
         // console.log('users message ' + msg);
          io.emit('server message', msg );
     })
})


server.listen(3000 , ()=>{
      console.log('application is runing on the port 3000');
} ) ;

