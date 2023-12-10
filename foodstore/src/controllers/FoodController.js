const Food = require('../models/Food');

module.exports = {
    async insert(req, res) {        
        const {name, bagSize, price} = req.body; 

        try {
            const foodCreated = await Food.create({name, bagSize, price})
            return res.status(201).json(foodCreated);
        } catch (err) {
            return res.status(400).json({
                status: "Bad request",
                erro: err
            });
        }       
    },

    async update(req, res) {        
        const {name, bagSize, price} = req.body; 
        const foodUpdate = {bagSize, price};

        try {
            await Food.findOneAndUpdate({name}, foodUpdate, {new: true});
            return res.status(202).json(foodUpdate);
        } catch (err) {
            return res.status(400).json({
                status: "Bad request",
                erro: err
            });
        }       
    },

    async delete(req, res) {        
        const {name} = req.params; 

        const foodExist = await Food.findOne({ name }); 

        if(!foodExist) {
            return res.status(404).json({name});
        }

        try {
            const foodName = await Food.deleteOne({name});
            return res.status(204).json(`{${name} deleted`);
        } catch (err) {
            return res.status(400).json({
                status: "Bad request",
                erro: err
            });
        }       
    },    

    async search(req, res) {
        const { name } = req.query;
        let food = [];

        if(name){
            food = await Food.find({name});
        } else {
            food = await Food.find();
        }

        console.log(`${food.length} food found!`);
        
        return res.status(200).json(food);
    },
    
    async validate(req, res, next) {        
        const { name } = req.body;

        const foodExist = await Food.findOne({ name }); 

        if(foodExist) {
            return res.status(200).json(foodExist);
        }

        next();
    }


};