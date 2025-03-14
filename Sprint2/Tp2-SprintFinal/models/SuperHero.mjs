import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
    id: { type: String},
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador:String,
    createdAt: { type: Date, default: Date.now }
});
const superHero = mongoose.model('SuperHero', superheroSchema, 'Grupo-15')
export default superHero;