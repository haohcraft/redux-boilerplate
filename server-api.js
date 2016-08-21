require('babel-register');
const routes = require('./routes');
const http = require('http');
const express = require('express');
const app = express();
const compression = require('compression');

app.disable('x-powered-by');

//Enable gzip compression
app.use(compression());
app.set('json spaces', 0);

/*eslint-disable*/
express.static.mime.default_type = "application/javascript";
routes.default(app);
console.log(`API Server listening on port: ${process.env.PORT + 1 || 5050}`);
/*eslint-enable*/

http.createServer(app).listen(process.env.PORT + 1 || 5050);
