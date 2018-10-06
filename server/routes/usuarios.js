const express = require('express');
const app = express();
const Usuario = require('../models/usuario');

const bcrypt = require('bcryptjs');
const saltRounds = 10;

app.get('/usuario', function(req, res) {
    res.json('Get Usuario')
});

app.post('/usuario', function(req, res) {


    let body=req.body;

    let usuario= new Usuario({
        nombre:body.nombre,
        email:body.email,
        password:bcrypt.hashSync(body.password,10),
        roles:body.rol,
        matricula:body.matricula
    });

    // User es la respuesta de lo que se grabo
    usuario.save((err,user)=>{

        if( err ){

        return  res.status(400).json({

                ok:false,
                 err

            });
        }
     res.json({

         ok:true,
         usuario:user


     })


    });

    // if(body.nombre==undefined){
    //
    //     res.status(400).json({
    //         ok:400,
    //         mensaje:"Envie otro dato"
    //
    //     });
    //
    // }
    // res.json(
    //     {
    //
    //         personaje:body
    //     }
    // );




});
app.put('/usuario/:id', function(req, res) {

    let id=req.params.id;
    res.json({

        id

    });
});

app.delete('/usuario', function(req, res) {
    res.json('Get Usuario')
});

app.get('/usuario', function(req, res) {
    res.json('Get Usuario')
});

module.exports=app;
