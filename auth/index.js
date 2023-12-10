const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});