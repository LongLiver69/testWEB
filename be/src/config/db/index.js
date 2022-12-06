const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://longliv2k2:longloz2k2@cluster0.5jzuapa.mongodb.net/node-js')
        console.log("ok");
    } catch (error) {
        console.log(error);
    }
}



module.exports = {connect};