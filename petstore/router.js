const express = require('express');
const rootRouter = express.Router();
const PetController = require('./src/controllers/PetController');

rootRouter.get('/', (req, res) => {
    res.status(200).json({
        msg: "Hello world - GET"
    });
});

const petRouter = express.Router();

rootRouter.use('/pet', petRouter);

petRouter.post('/', PetController.validate, PetController.insert);
petRouter.get('/', PetController.search);
petRouter.patch('/');
petRouter.delete('/', PetController.validateDelete, PetController.delete);

module.exports = rootRouter;
