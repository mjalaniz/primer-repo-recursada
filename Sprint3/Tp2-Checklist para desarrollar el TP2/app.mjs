import express from 'express'; //importamos el framework Express
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs'

//Importamos los controladores
//import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, obtenerTodosSuperheroes } from './controllers/superheroesController.mjs';

const app = express(); //Inicializamos una aplicacion de Express
const PORT = process.env.PORT || 3100; //Definimos el puerto en el que escuchara el servidor

//middleware para permitir el manejo de solicitudes con cuerpo en formato JSON
app.use(express.json());

//CONEXION A MondoDB
connectDB(); 

//configuracion de rutas
app.use('/api', superHeroRoutes);

//Manejo de errores para rutas no encontradas
app.use((req, res) => {
        res.status(404).send({ message: 'Ruta no encontrada' });
});

//inicia el server
app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
