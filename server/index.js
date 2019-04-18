const express = require('express');
const app = express();
const FTPServer = require('../server/ftp');

let server_options = {
    url : "ftp://127.0.0.1:23",
    greeting: "Connected to the FTP server ... ",
    anonymous: true
};

const ftp_server = new FTPServer(server_options);
ftp_server.start();

app.get('/',(req,res)=>{
    res.send('hello');
})

app.listen(3000);