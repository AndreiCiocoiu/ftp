const ftp = require('ftp');
const net = require('net');

const Client = new ftp();

Client.on('ready',()=>{
    console.log('ready');
})

Client.connect();