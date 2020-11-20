const express = require('express');
// const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
    origin: "http://dayout.it:5001"
};

app.use(cors(corsOptions));

const functionalitiesRoutes = require('./api/routes/functionalities');

//initialization of the database connection
const Database = require('./api/util/db');
Database.createPool();

app.use('/api/v1/functionalities', functionalitiesRoutes);

app.use('/', express.static('public'));

module.exports = app;