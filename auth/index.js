const express = require('express');
const router = require('./router');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});