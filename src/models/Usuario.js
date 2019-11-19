const mongoose = require('mongoose');


const UsuarioSchema = new mongoose.Schema({
    nome    : String,
    email   : String,
    idade   : Number 
})

module.exports = mongoose.model('Usuario', UsuarioSchema);