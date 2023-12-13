const express = require('express');
const rootRouter = express.Router();
const FoodController = require('./src/controllers/FoodController');
const AuthController = require('./src/controllers/AuthController');

rootRouter.get('/', (req, res) => {
    res.status(200).json({
        msg: "Hello Food!"
    });
});

const foodRouter = express.Router();

rootRouter.use(`/food`, AuthController.checkJWT, foodRouter);

foodRouter.post('/', FoodController.validate, FoodController.insert);
foodRouter.get('/', FoodController.search);
foodRouter.patch('/:foodName/:bagSize', FoodController.update);
foodRouter.delete('/:foodName/:bagSize', FoodController.delete);

module.exports = rootRouter;
