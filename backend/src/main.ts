import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from "fs";
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';
import {ValidationPipe} from "@nestjs/common";
import {join} from "path";
import {config} from "dotenv";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
//socket.io deps
import * as express from 'express';
import * as cors from 'cors';
const { ExpressPeerServer } = require('peer');
import { useSocketIoServer } from './socket';

const app = express();
app.use(cors());

let server = null
let httpsOptions = null

// use for http
if(process.env.ENVIRONMENT === 'dev') {
  server = http.createServer(app);
} 
// use for https
if(process.env.ENVIRONMENT === 'prod') {
  httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '', '/ssl/key.txt').replace('dist', 'src')),
    cert: fs.readFileSync(path.join(__dirname, '', '/ssl/cert.txt').replace('dist', 'src')),
  };
  server = https.createServer(httpsOptions, app);
}
 

// Socket io configuration
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true,
    },
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('stream', function(data) {
    socket.broadcast.emit('stream', data)
  })

  socket.on('stream-status', function(data) {
    socket.broadcast.emit('stream-status', data)
  })

  socket.on('stream-client-request', function(data) {
    socket.broadcast.emit('stream-client-request', data)
  })
});

const _server = server.listen(process.env.SOCKET_IO_PORT, () => {
    console.log('socket io server listening on *:' + process.env.SOCKET_IO_PORT);
});

// const peerServer = ExpressPeerServer(_server, {
//   debug: true
// });
// console.log('---------------peerServer', peerServer)
// app.use('/peerjs', peerServer);
// peerServer.on('connection', (client) => { console.log('client connected');});
// peerServer.on('disconnect', (client) => { console.log('client disconnected');});

export const socketIoServer = io;

async function bootstrap() {
  let option = {}

  if(process.env.ENVIRONMENT === 'dev') option = { cors: true }
  if(process.env.ENVIRONMENT === 'prod') option = { cors: true, httpsOptions }

  const app = await NestFactory.create(AppModule, option);

  app.useGlobalPipes(new ValidationPipe());
  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
  app.use('/images', express.static(path.join(__dirname, '..', 'images')));

  config({path: join(__dirname, '../.env')});

  //swagger
  const swagger_config = new DocumentBuilder()
    .setTitle('Sameem')
    .setDescription('Sameem API Documentation')
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Categories')
    .addTag('Contacts')
    .addTag('FAQs')
    .addTag('Groups')
    .addTag('Group Requests')
    .addTag('Media')
    .addTag('Messages')
    .addTag('Notifications')
    .addTag('Posts')
    .addTag('Quotations')
    .addTag('Users')
    .addTag('User Post Histories')
    .addSecurity('bearer', {
        type: 'http',
        scheme: 'bearer',
    })
    .build();
  const document = SwaggerModule.createDocument(app, swagger_config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);

  // Socket.IO server initialization
//   socketIoServer.attach(app.getHttpServer());
  console.log('Socket.IO server initialized');
}
bootstrap();
