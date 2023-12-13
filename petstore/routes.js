const express = require('express');
const rootRouter = express.Router();
const PetController = require('./src/controllers/PetController');
const AuthController = require('./src/controllers/AuthController');

rootRouter.get('/', (req, res) => {
    res.status(200).json({
        msg: "Hello Pet!"
    });
});

const petRouter = express.Router();

rootRouter.use(`/pet`, AuthController.checkJWT, petRouter);

petRouter.post('/', PetController.validate, PetController.insert);
petRouter.get('/', PetController.search);
petRouter.patch('/:name', PetController.update);
petRouter.delete('/:name', PetController.delete);

module.exports = rootRouter;
