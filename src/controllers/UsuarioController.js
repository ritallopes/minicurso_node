const Usuario = require('./../models/Usuario');

module.exports={
    async store(req, res){
        const user = {
            nome    : req.body.nome,
            email   : req.body.email,
            idade   : req.body.idade
        };

        let usuario = await Usuario.findOne({email : user.email});

        if(!usuario){
            usuario = await Usuario.create(user);
            return res.json(usuario);
        }

        return res.json({message : 'Usuário com esse email já cadastrado'})
    },

    async index(req, res){
        let usuarios = await Usuario.find();
        return res.json(usuarios);
    },

    async show(req, res){
        await Usuario.findById(req.params.id, (err, user) =>{
            if(err){
                return res.json({message: 'Usuário não encontrado'});
            }

            return res.json(user);
        })
    },

    //findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, user)
    //                  parametro base, o que atualizar, flag do mongo para retornar o cara atualizado
    async update(req,res){
        Usuario.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, user)=>{
            if(err){
                return res.json({message: 'Usuário não encontrado'});
            }
            return res.json(user);
        })
        
    },

    async showByIdade(req, res){
        let usuarios = await Usuario.find({idade: req.query.idade});

        return req.json(usuarios);
    }
}