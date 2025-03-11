//import mongoose from "mongoose";

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grupo-15:grupo15@cursadanodejs.ls9ii.mongodb.net/Node-js')
    .then(()=> console.log('Conexion Exitosa a MongoDB'))
    .catch(error => console.log('Error de Conexion a MongoDB', error));

//esquema para superheroes
    const superheroSchema = new mongoose.Schema ({
    nombreSuperHeroe:{type:String, required:true},
    nombreReal:{type:String, required: true},
    edad:{type:Number, min:0},
    planetaOrigen:{type:String, default:'Desconocido'},
    debilidad:String,
    poderes:[String],
    aliados:[String],
    enemigos:[String],
    createAt:{type:Date, default:Date.new},
    creador: String
},{ collection:'Grupo-15'});

const SuperHero = mongoose.model('SuperHero', superheroSchema);

//insertar nuevo superheroe
async function insertSuperHero() {
    const hero = new SuperHero({
        nombreSuperHeroe: 'Pepito-Spiderman',
        nombreReal: 'Peter Parker - Mario',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: 'Radioactiva',
        poderes: ['Trepar paredes', 'Sentido aracnido', 'Super fuerza', 'Agilidad'],
        aliados: ['Ironman', 'Cerveza'],
        enemigos: ['Duende verde'],
        creador: 'Grupo 15 - Mario',
    });
    await hero.save();
    console.log('Superheroe insertado');
}

insertSuperHero();

//actulizar documento

async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        { nombreSuperHeroe:nombreSuperHeroe },
        { $set: { edad:70 } }
    );
    console.log('Resultado de la actualización', result);
}

updateSuperHero('Pepito-Spiderman');

//Eliminar documento
async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({nombreSuperHeroe:nombreSuperHeroe});
    console.log('Superheroe eliminado:', result);
}

deleteSuperHero('Spiderman');


//buscar superheroe
async function findSuperHeroes(params) {
    const heroes = await SuperHero.find( { planetaOrigen:'Tierra'} );
    console.log('Superheroes encontrados: ', heroes);   
}

findSuperHeroes();