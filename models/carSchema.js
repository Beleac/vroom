const mongoose = require("mongoose");

const carSchema = mongoose.Schema({

    make: {
        type: String,
        required: [true, 'Car Make is required']
    },

    model: {
        type: String,
        required: [true,'Car Model is required']
    },

    year: {
        type: Number,
        required: [true, 'The Year is required']
    },

    price: {
        type: Number
    },

    style: {
        type: String
    },

}, {timestamps: true});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;