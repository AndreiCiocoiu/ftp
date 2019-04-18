const ftp = require('ftp');

const Client = new ftp();

Client.on('ready', () => {
    console.log('I am ready !');
    Client.put('foo.txt', 'foo.remote-cop.txt', (err) => {
        console.log('Inside put');
    });
});

Client.connect({user: 'test'});