import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from "fs";
import * as path from 'path';
// import * as https from 'https';
import * as http from 'http';
import {ValidationPipe} from "@nestjs/common";
import {join} from "path";
import {config} from "dotenv";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
//socket.io deps
import * as express from 'express';
import * as cors from 'cors';

// const httpsOptions = {
//     key: fs.readFileSync(path.join(__dirname, '', '/ssl/key.txt').replace('dist', 'src')),
//     cert: fs.readFileSync(path.join(__dirname, '', '/ssl/cert.txt').replace('dist', 'src')),
// };

const app = express();

// const server = https.createServer(httpsOptions, app);
const server = http.createServer(app);
const { Server } = require("socket.io");

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true,
    },
});

io.on('connection', socket => {
  socket.emit('me', socket.id); // my socket id

  socket.on('disconnect', () => {
    socket.broadcast.emit('callEnded')
  });

  socket.on('callUser', (data) => {
    io.to(data.userToCall).emit('callUser', {signal: data.signalData, from: data.from, name: data.name})
  })

  socket.on('answerCall', (data) => io.to(data.to).emit('callAccepted', data.signal))
});

server.listen(process.env.SOCKET_IO_PORT, () => {
    console.log('socket io server listening on *:' + process.env.SOCKET_IO_PORT);
});

export const socketIoServer = io;

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, { cors: true, httpsOptions });
  const app = await NestFactory.create(AppModule, { cors: true });

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
  socketIoServer.attach(app.getHttpServer());
  console.log('Socket.IO server initialized');
}
bootstrap();
