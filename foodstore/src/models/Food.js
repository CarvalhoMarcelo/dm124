const { Schema, model } = require('mongoose');

const FoodSchema = new Schema(
    {
        foodName: {type: String, required: true},
        kindOfPet: {type: String, required: true},
        bagSize: {type: String, required: true},
        price: {type: Number, required: true}
    },
    {
        timestamps: true
    }
);

module.exports = model(`Food`, FoodSchema);