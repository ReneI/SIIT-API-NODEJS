const mongoose=require('mongoose');
const mongooseHidden = require('mongoose-hidden')()

let Schema= mongoose.Schema;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const validator = require('mongoose-unique-validator');


let rolesValidos={
    values: ['ADMIN', 'ALUM', 'MASTER'], message:'{value} no es un rol valido'};


let usuarioSchema=new Schema({
        nombre:{
            type:String,
            required:[true,'por favor si']

        },
    matricula:{
            type:Number,
        required:true,
        unique:true

    },
    email:{

            type: String,
         required: false,
        unique:true,
        validate:[/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Por favor coloque un email valido"]

    },
    password:{

            type:String,
        required: [true,'por favor amigo']

    },
    img:{
            type:String,
        required:false

    },  // No es obligatorio
    role:{
            default:'ALUM',
            type:String,
        required:true,
        enum:rolesValidos

    },  // default user role
    estado:{
            type:Boolean,
         required:false
    },
    google:{
        type:Boolean,
        default:false

    }


});

usuarioSchema.plugin( validator,{ message: '{PATH} debe ser unico'} );
usuarioSchema.plugin(mongooseHidden, { hidden: { _id: false, password: true } });


module.exports=mongoose.model('usuario',usuarioSchema);
