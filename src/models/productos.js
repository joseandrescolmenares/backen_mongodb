const mongoose = require('mongoose');

const productoschema = mongoose.Schema({
    title:{
        type: String,
        
    },

    imagen:{
        type: String,
       
    },

    descripcion:{
        type: String,
        
    },
    puntaje:{
        type: Number,
        
    },

    cantidad:{
        type: Number,
        
    },

    precio:{
        type: Number,
       
    }


})


module.exports = mongoose.model('Producto', productoschema )