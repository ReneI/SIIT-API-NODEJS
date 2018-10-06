const express = require('express');
const app = express();
const Usuario = require('../models/usuario');
const _ = require('underscore');

const bcrypt = require('bcryptjs');
const saltRounds = 10;

app.get('/usuario', function(req, res) {

    let desde=req.query.desde || 0;
    desde=Number(desde);
    let hasta=req.query.hasta || 6;
    hasta=Number(hasta);

        Usuario.find({estado:true}).skip(desde).limit(hasta)
            .exec((err,usuarios)=>{

                if(err){

                 res.status(400).json({

                         ok: false
                     }
                 )

                }
       Usuario.count({estado:true},(err,conteo)=> {
           res.json({
                   ok: true,
                   usuarios,
                    conteo
               }
           )

           }
       )

            });

});

app.post('/usuario', function(req, res) {


    let body=req.body;

    let usuario= new Usuario({
        nombre:body.nombre,
        email:body.email,
        password:bcrypt.hashSync(body.password,10),
        role:body.role,
        estado:body.estado,
        matricula:body.matricula,
        img:body.img,
        google:body.google

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
    let body=_.pick( req.body, [ 'nombre', 'email', 'img', 'role', 'estado']);
    Usuario.findByIdAndUpdate(id,body,{new:true,runValidators:true}, (err, usuarioDB)=>{

        if(err){
           return res.status(400).json({

                ok:false,
               err
            });

        }

        res.json({

            ok:true,
            usuario:usuarioDB

    });
});
});
app.delete('/usuario/:id', function(req, res) {
    let id =req.params.id;
    
    Usuario.findByIdAndUpdate(id,{estado:false}, {new:true}, (err,userdelete)=>{
        if(err){
            return res.status(400).json({

                          err

                      })}
       
        res.json(
            {
                status:"ok",
                userdelete

            }
        )
        
        
    });
    
    
    
    
    
    
    
//==================================================
// Instruccion para eliminar todo el objeto

    // Usuario.findByIdAndDelete(id,(err,userdelete)=>{
    //       if(err){
    //
    //           return res.status(400).json({
    //
    //               err
    //
    //           })
    //
    //       }
    //       if(!userdelete) {
    //           res.status(400).json({
    //                   ok: true,
    //                   err:{
    //                       message:"usuario no existe"
    //                   }
    //               }
    //           )
    //       }
    // });
});



module.exports=app;
