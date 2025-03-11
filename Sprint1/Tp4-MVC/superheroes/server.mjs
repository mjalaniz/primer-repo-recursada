import express from "express";
import { obtenerSuperheroesPorIdController, buscarSuperheroePorAtributoController, obtenerSuperheroesMayoresDe30Controller } from "./controllers/superheroesController.mjs"; 

// import { obtenerSuperheroesMayoresDe30 } from "./services/superheroesService.mjs";

const app = express();
const PORT = 3005;

//rutas
app.get('/superheroes/id/:id', obtenerSuperheroesPorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroePorAtributoController);
app.get('/superheroes/edad/mayores30/', obtenerSuperheroesMayoresDe30Controller);

//levantamos el server en port 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});