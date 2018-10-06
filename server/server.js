require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//var bodyParser = require('body-parser')


//Para manejar el midleware
// Trabsforma a formato json lo que envia el usuario
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/usuarios'));


mongoose.connect('mongodb://localhost:27017/cafe',(err,res)=>{
    if(err) throw err;
    console.log('Conectado con exto');

});


app.listen(process.env.PORT,()=>{

    console.log("Probando el puerto");

})