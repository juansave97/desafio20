const mongoose = require('mongoose');

const User = mongoose.model('User', mongoose.Schema({
    username: String,
    password: String,
    email: String,
    phone: String,
    carrito: { type: Array, required: true }
}));

module.exports = User