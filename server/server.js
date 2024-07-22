const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, HEAD, PATCH, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", " Content-Type");
    next();
  });

app.set('view engine', 'ejs');

mongoose.connect(config.getDBConnectionString());
setupController(app);
apiController(app);

app.listen(port);