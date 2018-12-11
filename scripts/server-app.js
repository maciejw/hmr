const path  =require('path')
const proxy = require('http-proxy-middleware');
const express = require('express');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const morgan = require('morgan');
const consoleStamp = require('console-stamp');

const hrmEntries = ['eventsource-polyfill', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'];

consoleStamp(console, { pattern: 'HH:MM:ss.l' });

const app = express();
module.exports = { hrmEntries, app };

app.use(morgan('dev'));

const webpack = require('webpack');

const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);




app.use(
  webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  })
);

const { publicPath = '/' } = webpackConfig.output || { publicPath: undefined };

app.use(
  webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath: publicPath
  })
);

app.use('*', function (req, res, next) {
  var filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});