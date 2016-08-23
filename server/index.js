const http = require('http');
const express = require('express');
const app = express();
const compression = require('compression');
const INTERVAL_ONE_SEC = 1000;
import routes from './routes';
import { collectLastTenMinLoadAvg } from './collectLoad';
const listenHandler = () => {
    setInterval(() => collectLastTenMinLoadAvg(), INTERVAL_ONE_SEC);
};

app.disable('x-powered-by');

//Enable gzip compression
app.use(compression());
app.set('json spaces', 0);

/*eslint-disable*/
express.static.mime.default_type = "application/javascript";
routes(app);
console.log(`API Server listening on port: ${process.env.PORT + 1 || 5050}`);
/*eslint-enable*/

http.createServer(app).listen(process.env.PORT + 1 || 5050, listenHandler);
