const fs = require('fs');
const path = require('path');
const express = require('express');
const https = require('https');
const { ExpressPeerServer } = require('peer');

// const httpsOptions = {
//     key: fs.readFileSync(path.join(__dirname, '', '/src/ssl/key.txt').replace('dist', 'src')),
//     cert: fs.readFileSync(path.join(__dirname, '', '/src/ssl/cert.txt').replace('dist', 'src')),
// };

const app = express();
const server = require('http').createServer(app);
// const server = https.createServer(httpsOptions, app);

const peerServer = ExpressPeerServer(server, {
    debug: true,
});
  
app.use('/peerjs', peerServer);
  
peerServer.on('connection', (client) => {
    console.log('Client connected:', client.getId());
});
  
peerServer.on('disconnect', (client) => {
    console.log('Client disconnected:', client.getId());
});

const buildFolderPath = path.join(__dirname, 'out');
app.use(express.static(buildFolderPath));

// server.listen(3014, () => {
//     console.log('Admin server listening on port: ' + 3014);
// });

server.listen(3014, () => {
    console.log('Admin server listening on port: ' + 3014);
});