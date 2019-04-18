const ftpServer = require('ftp-srv');
const util = require('util');


class FTPServer {
    constructor(params) {
        if (params) {
            this.server_options = params;
        } else {
            throw new Error('No server options object received.');
        }
        console.log('server opt ' + this.server_options.url);
        this.server = new ftpServer(`${this.server_options.url}`, {

        });
        console.log(this.server);
    }

    start() {
        this.server.listen().then(() => {
            console.log('FTP server listening ...');
        });

        this.server.on('login', ({connection, username, password}, resolve, reject) => {
            console.log('Connected !');
            console.log('connection: ' + util.inspect(connection.username));
            resolve('ready');
            
            
        })

        this.server.on('client-error', ({
            connection,
            context,
            error
        }) => {
            console.log('Client error');
        });
        this.server.on('RETR', (error, filePath) => {
            console.log('Download file');
        });

        this.server.on('STOR', (error, fileName) => {
            console.log('File upload');
        });

        this.server.on('RNTO', (error, fileName) => {
            console.log('File renamed');
        });


    }

}

module.exports = FTPServer;