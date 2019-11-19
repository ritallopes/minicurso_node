const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router(); //nosso roteador


routes.post('/usuarios', UsuarioController.store); //passamos o método responsável por tratar 

routes.get('/usuarios', UsuarioController.index)

routes.get('/usuarios/:id', UsuarioController.show);

routes.put('/usuarios:id', UsuarioController.update);

routes.get('/usuariosByIdade', UsuarioController.showByIdade);


module.exports = routes; //oferecendo para exportação