const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false})
    .then(() => {
        console.log(`Succesfully connected to MONGODB`)
    })

    .catch((error) => {
        console.log(`Failed to connect to MONGODB`)
        console.log(error)
    });

    module.exports = mongoose;