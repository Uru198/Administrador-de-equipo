const mongoose = require("mongoose");

const EsquemaPlayer = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio"],
        minLength: [3, "Nombre debe tener al menos 2 caracteres"]
    },
    posicion: {
        type: String,
        minLength: [3, "La posicion  debe tener al menos 3 caracteres"]
    },
    estado: {
        type: Array,
        required: [true, "descripcion obligatorio"],
        default: ["undecided","undecided","undecided"]
    }

    
}, {timestamps: true, versionKey: false})

//timestamps crea los campos de createAt y updateAt
//versionKey: false elimina el atributo _v

const Player = mongoose.model("player", EsquemaPlayer);

module.exports = Player;