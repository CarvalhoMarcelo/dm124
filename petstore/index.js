const express = require('express');
const router = require('./router');
const mongoose = require(`mongoose`);
const DB = require(`./src/database/config`);

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

mongoose.connect(DB.DB_URL, DB.DB_SETTINGS)
    .then(() => console.log(`MongoDB database connected to ${DB.DB_URL}`))
    .catch(err => console.log(`Error: ${err}`))

app.listen(port, function() {
    console.log("Server is running...");
});