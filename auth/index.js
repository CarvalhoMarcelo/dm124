const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

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

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});