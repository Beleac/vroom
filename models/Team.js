const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true},
    members: [{ type: mongoose.Schema.Types.ObjectsId, ref: 'Superhero'}]
}, {timestamps: true});