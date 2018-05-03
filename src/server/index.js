// Dependencies
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');

// Import our db connection
var db = require('./api/config/connection');

const app = express();

// import routings
const personRoutes = require('../shared/routing/personRouter');

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

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

// routes
app.use('/api/person', personRoutes);

// Create server
const server = http.createServer(app);

// starting the server
server.listen(app.get('port'), () => {
  console.log('server on port ',app.get('port'));
});
