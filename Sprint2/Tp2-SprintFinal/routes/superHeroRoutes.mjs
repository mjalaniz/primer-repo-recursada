import express from "express";

import{
    obtenerSuperheroePorIdController,
    obtenerTodosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller
} from '../controllers/superheroesController.mjs'

const router = express.Router();

router.get('/heroes', obtenerTodosSuperheroesController);
router.get('/heroes/mayores-de-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);


export default router;