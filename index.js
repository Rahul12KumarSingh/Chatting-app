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

var cnsp = io.of('/custom-namespace') ;

cnsp.on('connection' , (socket)=>{
        cnsp.emit('rahul', "hii there!!") ;
})

io.on('connection' , (socket)=>{
        io.emit('apnaevent' , "hii apna event");
})

server.listen(3000 , ()=>{
      console.log('application is runing on the port 3000');
}) ;

