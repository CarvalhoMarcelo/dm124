const express = require('express');
const routes = require('./routes');
const mongoose = require(`mongoose`);
const DB = require(`./src/database/config`);
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3002;

mongoose.connect(DB.DB_URL, DB.DB_SETTINGS)
    .then(() => console.log(`MongoDB database connected to ${DB.DB_URL}`))
    .catch(err => console.log(`Error: ${err}`))

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});