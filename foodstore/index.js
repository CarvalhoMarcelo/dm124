const express = require('express');
const routes = require('./routes');
const mongoose = require(`mongoose`);
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const DB = require(`./src/database/config`);
require('dotenv').config();

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'dev') {
    app.use(morgan("combined"));
} else {    
    app.use(morgan("tiny"));

    const logFileStream = fs.createWriteStream(path.join(__dirname, 'app.log'), {flags: 'a'});
    app.use(morgan("combined", {
        stream: logFileStream
    }));

}

app.use(routes);

const port = process.env.PORT || 3002;

mongoose.connect(DB.DB_URL, DB.DB_SETTINGS)
    .then(() => console.log(`MongoDB database connected to ${DB.DB_URL}`))
    .catch(err => console.log(`Error: ${err}`))

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});