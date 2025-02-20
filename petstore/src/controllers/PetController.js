const Pet = require('../models/Pet');

module.exports = {
    async insert(req, res) {        
        const {name, breed, age} = req.body; 

        try {
            const petCreated = await Pet.create({name, breed, age})
            return res.status(201).json(petCreated);
        } catch (err) {
            return res.status(400).json({
                status: "Bad request",
                erro: err
            });
        }       
    },

    async update(req, res) {        
        const { name } = req.params; 
        const {breed, age} = req.body;

        try {
            const petUpdate = await Pet.findOneAndUpdate({name}, { breed, age }, {new: true});
            return res.status(202).json(petUpdate);
        } catch (err) {
            return res.status(400).json({
                status: "Bad request",
                erro: err
            });
        }       
    },

    async delete(req, res) {        
        const {name} = req.params; 

        const petExist = await Pet.findOne({ name }); 

        if(!petExist) {
            return res.status(404).json({name});
        }

        try {
            const petName = await Pet.deleteOne({name});
            return res.status(204).json(`{${name} deleted`);
        } catch (err) {
            return res.status(400).json({
                status: "Bad request",
                erro: err
            });
        }       
    },    

    async search(req, res) {
        // GET localhost:3000/pet
        // GET localhost:3000/pet?name=caramelo

        const { name } = req.query;
        let pets = [];

        if(name){
            pets = await Pet.find({name});
        } else {
            pets = await Pet.find();
        }

        console.log(`${pets.length} pet(s) found!`);
        
        return res.status(200).json(pets);
    },
    
    async validate(req, res, next) {        
        const { name } = req.body;

        const petExist = await Pet.findOne({ name }); 

        if(petExist) {
            return res.status(200).json(petExist);
        }

        next();
    }


};