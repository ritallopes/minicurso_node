const express = require('express');
const routes = require('./routes');//dependencia própria
const mongoose = require('mongoose');

const app = express(); //estaciando servidor

app.use(express.json()); //avisando que enviará requisição json



mongoose.connect('mongodb+srv://nodecurso:nodecurso@clusterminicursonode-rxogz.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology : true
});



app.use(routes);


app.listen(3333);//porta que o servidor ficará escutando



// app.get('/', (req, res) => {
//     res.json({
//         message:'Hello World'
//     });
// });




// app.post('/', (req, res) => {
//     res.json({
//         message:'Hello World'
//     });
// });


/*
    QUERY PARAMS:
    localhost:3333/usuarios?idade=21

    ROUTER PARAMS:
    localhost:3333/usuarios/1

    BODY PARAMS:
    localhos:3333/
*/

//query
// app.get('/usuarios', (req, res) => {
    
//     res.json(
//         req.query.idade
//     );
// });


// //routers
// app.get('/usuarios/:idade', (req, res) => {
    
//     res.json(
//         req.params
//     );
// });


// //body
// app.post('/usuarios', (req, res) => {
    
//     res.json(
//         req.body
//     );
// });





