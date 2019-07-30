const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    line: String
    
}, { timestamps: true});

const superheroSchema = new mongoose.Schema ({
    heroName: {type: String, required: true},
    alias: {type: String, required: true},
    placeOfBirth: {type: String, required: false},
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    quotes: [quoteSchema],
}, { timestamps: true});

const Superhero = mongoose.model('Superhero', superheroSchema);

module.exports = Superhero