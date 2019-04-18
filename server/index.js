const express = require('express');
const app = express();
const ftpsrv = require('../server/ftp');

let server_options = {
    url : "ftp://127.0.0.1:21",
    greeting: "Connected to the FTP server ... ",
    anonymous: true
};

const ftp_server = new ftpsrv(server_options);
ftp_server.start();

ftp_server.server.on('login',()=>{
    console.log('Connected !');
})

ftp_server.server.on('client-error',({connection, context, error})=>{
    console.log('Client error');
});

ftp_server.server.on('RETR',(error,filePath)=>{
    console.log('Download file');
});

ftp_server.server.on('STOR',(error,fileName)=>{
    console.log('File upload');
});

ftp_server.server.on('RNTO',(error,fileName)=>{
    console.log('File renamed');
});

app.get('/',(req,res)=>{
    res.send('hello');
})

app.listen(3000);