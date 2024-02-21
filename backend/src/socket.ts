// socket.ts

import { Server } from 'socket.io';
import { createServer } from 'http';

// Create an HTTP server
const server = createServer();

// Initialize Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3014",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

// Export both the server and io instances
export { server, io };
