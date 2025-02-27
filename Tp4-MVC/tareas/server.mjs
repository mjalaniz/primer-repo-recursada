import express from 'express'; //importamos el framework Express

//Importamos los controladores
import { listarTareasController,
        listarTareasCompletadasController,
        crearTareaController,
        completarTareaController,
        eliminarTareaController } from './controllers/tareaController.mjs';

const app = express(); //Inicializamos una aplicacion de Express
const PORT = 3000; //Definimos el puerto en el que escuchara el servidor

//middleware para permitir el manejo de solicitudes con cuerpo en formato JSON

app.use(express.json());

//Rutas
//ruta para obtener todas las tareas
app.get('/tareas', listarTareasController);
//ruta para obtener las tareas completadas
app.get('/tareas/completadas', listarTareasCompletadasController);
//ruta para crear una nueva tarea
app.post('/tareas', crearTareaController);
//ruta para marcar una tarea como completada
app.put('/tareas/:id/completar', completarTareaController);
//ruta para eliminar una tarea
app.delete('/tareas/:id', eliminarTareaController);

//inicia el server
app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
