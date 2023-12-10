const { Schema, model } = require('mongoose');

const FoodSchema = new Schema(
    {
        name: {type: String, required: true},
        bagSize: {type: String, required: true},
        price: {type: Number, required: true},

    },
    {
        timestamps: true
    }
);

module.exports = model(`Pet`, FoodSchema);