const express = require('express');
const rootRouter = express.Router();
const JwtController = require('./src/controllers/JwtController');

rootRouter.get('/', (req, res) => {
    res.status(200).json({
        msg: "Hello world"
    });
});

const jwtRouter = express.Router();

rootRouter.use('/auth', jwtRouter);

jwtRouter.post('/login', JwtController.login);
jwtRouter.post('/validateToken', JwtController.checkJWT);

module.exports = rootRouter;
