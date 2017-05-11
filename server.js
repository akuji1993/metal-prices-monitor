const express = require('express');
const http = require('http');
const webpack = require('webpack');
const url = require('url');
const fs = require('fs');
const config = require('./webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const baseDir = __dirname;
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use('/public', express.static(`${baseDir}/public`));

app.get('*', (request, response) => {
    response.sendFile(`${baseDir}/src/index.html`);
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
