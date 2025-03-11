import mongoose from 'mongoose';

const uri = 'mongodb+srv//Grupo-15:grupo15@cursadanodejs.ls9ii.mongodb.net/Node-js';

const opciones = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
};

mongoose.connect(uri)
    .then(()=>console.log('Conexion exitosa a MongoDB'))
    .catch(error=>console.log('Error al conectar a MongoDB',error));


    const superheroSchema = new mongoose.Schema({
        nombreSuperHeroe: { type: String, required: true },
        nombreReal: { type: String, required: true },
        edad: { type: Number, min: 0 },
        planetaOrigen: { type: String, default: 'Desconocido' },
        debilidad: String,
        poderes: [String],
        aliados: [String],
        enemigos: [String],
        createdAt: { type: Date, default: Date.now }
    }, { collection: 'Grupo-12' }); // Aquí defines la colección de cada grupo
    
    
// Modelo para el superhéroe
    const SuperHero = mongoose.model('SuperHero', superheroSchema);
    
// Función para insertar un superhéroe
    async function insertSuperHero() { 
        const hero = new SuperHero({ 
            nombreSuperHeroe: 'Black Panther', 
            nombreReal: "Rey T'Challa", 
            edad: 40, 
            planetaOrigen: 'Tierra - Wakanda', 
            debilidad: 'Arrogancia',
            poderes: ['fuerza irresistible','objeto indestructible'], 
            aliados: ['Guardianes de la Galaxia', 'Spider-Man'], 
            enemigos: ['Helmut Zemo,']
        });
        
        await hero.save(); 
        console.log('Superhéroe insertado:', hero); 
    }
    
// Llamada a la función insertSuperHero
    insertSuperHero(); 
    
// Función para actualizar un superhéroe
    async function updateSuperHero(nombreSuperHeroe) { 
        const result = await SuperHero.updateOne( 
            { nombreSuperHeroe: nombreSuperHeroe }, 
            { $set: { edad: 44 } }
        );
        console.log('Resultado de la actualización:', result); 
    }
    
// Llamada a la función updateSuperHero
    updateSuperHero('Full Stack');

//eliminar elemento de la coleccion
    async function deleteSuperHero(nombreSuperHeroe) {
        const result = await SuperHero.deleteOne({nombreSuperHeroe: nombreSuperHeroe});
        console.log('Superheroe eliminado', result);    
    }
    deleteSuperHero('BlackPanther');

//buscar elemento
    async function findSuperHero(nombreSuperHeroe){
        const result = await SuperHero.findOne({nombreSuperHeroe});
        console.log('Superheroe encontrados', result);
    }
    findSuperHero('Full Stack');