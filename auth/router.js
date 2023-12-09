const express = require('express');
const rootRouter = express.Router();
const AuthController = require('./src/controllers/AuthController');

rootRouter.get('/', (req, res) => {
    res.status(200).json({
        msg: "Hello world"
    });
});

const authRouter = express.Router();

rootRouter.use('/auth', authRouter);

authRouter.post('/login', AuthController.login);
authRouter.post('/validateToken', AuthController.checkJWT);

module.exports = rootRouter;
