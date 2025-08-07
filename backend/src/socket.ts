import * as http from 'http';
import * as https from 'https';
const { Server } = require("socket.io")

export function useSocketIoServer(server = null) {
  
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
      credentials: true,
    },
  });
  
  io.on('connection', socket => {
    console.log('me', socket.id)

    socket.emit('me', socket.id);
  
    socket.on('disconnect', () => {
      socket.broadcast.emit('callEnded')
    });
  
    socket.on('callUser', (data) => {
      io.to(data.userToCall).emit('callUser', {signal: data.signalData, from: data.from, name: data.name})
    })
  
    socket.on('answerCall', (data) => io.to(data.to).emit('callAccepted', data.signal))
  });


  return io;
}