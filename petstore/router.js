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

petRouter.post('/', PetController.insert);
petRouter.get('/', PetController.search);

module.exports = rootRouter;
