import mongoose from "mongoose";

const informacionSchema = new mongoose.Schema({
    titulo: 
    {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    descripcion: 
    {
        type: String,
        trim: true
    },
    estadoPublicacion: 
    {
        type: Boolean, //True es Visible y False es Oculto
        default: true
    }
});

const tutorialSchema = new mongoose.Schema({
    autor: 
    {
        type: String,
        required: true,
        trim: true
    },
    fechaCreacion: 
    {
        type: Date,
        default: Date.now
    },
    //Relación 1 a 1 Embebida
    informacion: informacionSchema
},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model('Tutorial', tutorialSchema);