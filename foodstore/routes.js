const express = require('express');
const rootRouter = express.Router();
const FoodController = require('./src/controllers/FoodController');
const AuthController = require('./src/controllers/AuthController');

rootRouter.get('/', (req, res) => {
    res.status(200).json({
        msg: "Hello world - GET"
    });
});

const foodRouter = express.Router();

rootRouter.use(`/food`, AuthController.checkJWT, foodRouter);

petRouter.post('/', FoodController.validate, FoodController.insert);
petRouter.get('/', FoodController.search);
petRouter.put('/', FoodController.update);
petRouter.delete('/:name', FoodController.delete);

module.exports = rootRouter;
