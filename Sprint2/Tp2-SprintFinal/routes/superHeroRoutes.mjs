import express from "express";


//configuro rutas necesarias para cada operacion del controlador. Se definen los 'endpoints' y el mapeo a cada controlador

import{

    obtenerTodosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    obtenerSuperheroePorIdController
} from '../controllers/superheroesController.mjs'

const router = express.Router();

router.get('/heroes', obtenerTodosSuperheroesController);
router.get('/heroes/mayores-de-30', obtenerSuperheroesMayoresDe30Controller);

router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);


export default router;