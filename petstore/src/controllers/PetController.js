const Pet = require('../models/Pet');

module.exports = {
    async insert(req, res) {        
        const {name, breed, age} = req.body; // variable have the same name then the body fields

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

        const petExist = await Pet.findOne({ name }); // if value and field have the same I do not need to use the variable : value (name : name)

        if(petExist) {
            return res.status(200).json(petExist);
        }

        next();
    }
};