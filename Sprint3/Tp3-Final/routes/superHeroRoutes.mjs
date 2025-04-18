import express from "express";

//configuro rutas necesarias para cada operacion del controlador. Se definen los 'endpoints' y el mapeo a cada controlador

import { validarSuperHeroe } from '../validators/superHeroValidators.mjs';
import { handleValidationErrors } from '../validators/errorMiddleware.mjs';
import{
    obtenerTodosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    obtenerSuperheroePorIdController,
    nuevoSuperHeroeController,
    actualizarSuperHeroeController,
    borrarSuperHeroeIdController,
    borrarSuperheroePorNombreController,
    renderizarTodosLosSuperHeroesController,
    renderizarQuinesSomosController,
    renderizarAddSuperheroController,
    //renderizarEditSuperheroController,
    renderizarInicioController, 
    //renderizarDeleteSuperHeroController
} from '../controllers/superheroesController.mjs'

const router = express.Router();

router.get('/heroes', renderizarInicioController);
router.get('/heroes/dashboard', renderizarTodosLosSuperHeroesController);
router.get('/heroes/quienessomos', renderizarQuinesSomosController);
router.get('/heroes/agregar', renderizarAddSuperheroController);

router.get('/heroes', obtenerTodosSuperheroesController);
router.get('/heroes/mayores-de-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.post('/heroes/nuevo', validarSuperHeroe, handleValidationErrors, nuevoSuperHeroeController);
router.put('/heroes/actualizar/:id', validarSuperHeroe, handleValidationErrors, actualizarSuperHeroeController);
router.delete('/heroes/borrarheroe-id/:id', borrarSuperHeroeIdController);
router.delete('/heroes/borrarheroe-nombre/:nombreSuperheroe', borrarSuperheroePorNombreController);

export default router;