const {FtpSrv,FileSystem} = require('ftp-srv');

class FileSystemManager extends FileSystem {
    constructor(){
        super(...arguments);
    }
}