const Food = require('../models/Food');

module.exports = {
    async insert(req, res) {        
        const {foodName, kindOfPet, bagSize, price} = req.body; 

        try {
            const foodCreated = await Food.create({foodName, kindOfPet, bagSize, price})
            return res.status(201).json(foodCreated);
        } catch (err) {
            return res.status(400).json({
                status: "Bad request",
                erro: err
            });
        }       
    },

    async update(req, res) {        
        const {foodName, bagSize} = req.params;               
        const {kindOfPet, price} = req.body;

        try {
            const foodUpdate = await Food.findOneAndUpdate({foodName, bagSize}, {kindOfPet, price}, {new: true});
            return res.status(202).json(foodUpdate);
        } catch (err) {
            return res.status(400).json({
                status: "Bad request",
                erro: err
            });
        }       
    },

    async delete(req, res) {        
        const { foodName, bagSize} = req.params;

        const foodExist = await Food.findOne({ foodName, bagSize }); 

        if(!foodExist) {
            return res.status(404).json({foodName, bagSize});
        }

        try {
            const food = await Food.deleteOne({foodName, bagSize});
            return res.status(204).json(`{${food} deleted`);
        } catch (err) {
            return res.status(400).json({
                status: "Bad request",
                erro: err
            });
        }       
    },    

    async search(req, res) {
        const { foodName, bagSize} = req.query;
        let food = [];

        if(foodName){
            food = await Food.find({foodName, bagSize});
        } else {
            food = await Food.find();
        }

        console.log(`${food.length} food found!`);
        
        return res.status(200).json(food);
    },
    
    async validate(req, res, next) {        
        const { foodName, bagSize } = req.body;

        const foodExist = await Food.findOne({ foodName, bagSize }); 

        if(foodExist) {
            return res.status(200).json(foodExist);
        }

        next();
    }


};