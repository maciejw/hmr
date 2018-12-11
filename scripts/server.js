const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

const { app } = require('./server-app');

if (require.main === module) {
  var server = https.createServer({ passphrase: 'pass', pfx: fs.readFileSync('./cert.pfx') }, app);
  server.listen(process.env.PORT || 443, function() {
    console.log('Listening on %j', server.address());
  });
}
