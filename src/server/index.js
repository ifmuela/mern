// Dependencies
const http = require('http');
const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');

const app = express();

const compiler = webpack(webpackConfig);

// Static files
app.use(express.static(path.join(__dirname, '../../www')));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  filename: 'bundle.js',
  stats: {
    colors: true
  },
  historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

const server = http.createServer(app);

// Settings
app.set('port', process.env.PORT || 3000);

// starting the server
server.listen(app.get('port'), () => {
  console.log('server on port ',app.get('port'));
});
