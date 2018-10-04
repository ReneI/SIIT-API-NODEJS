require('./config/config');
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

//Para manejar el midleware
// Trabsforma a formato json lo que envia el usuario
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('Get Usuario')
})

app.post('/usuario', function(req, res) {
     let body=req.body;

     if(res.nombre==undefined){

         res.status(400).json({
             ok:400,
             mensaje:"Envie otro dato"

         });

     }
     res.json(
         {

             personaje:body
         }
     );




})
app.put('/usuario/:id', function(req, res) {

    let id=req.params.id;
    res.json({

            id

    });
})

app.delete('/usuario', function(req, res) {
    res.json('Get Usuario')
})

app.get('/usuario', function(req, res) {
    res.json('Get Usuario')
})

app.listen(process.env.PORT,()=>{

    console.log("Probando el puerto");

})