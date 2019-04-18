const ftpServer = require('ftp-srv');

class FTPServer {
    constructor(params){
        let server_options;

        if(params){
            server_options = params.server_options;
        }else{
            throw new Error('No server options object received.');
        }

        this.server = new ftpServer(server_options);
        console.log(this.server);
    }

    start(){
        this.server.listen().then(()=>{
            console.log('FTP server listening ...');
        });
    }

}

module.exports = FTPServer;