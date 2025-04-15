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
    borrarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs'

const router = express.Router();

router.get('/heroes', obtenerTodosSuperheroesController);//controlado
router.get('/heroes/mayores-de-30', obtenerSuperheroesMayoresDe30Controller);//controlado
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);//controlado
router.get('/heroes/:id', obtenerSuperheroePorIdController);//controlado
router.post('/heroes/nuevo', validarSuperHeroe, handleValidationErrors, nuevoSuperHeroeController);//controlado
router.put('/heroes/actualizar/:id', validarSuperHeroe, handleValidationErrors, actualizarSuperHeroeController);//controlado
router.delete('/heroes/borrarheroe-id/:id', borrarSuperHeroeIdController);//controlado
router.delete('/heroes/borrarheroe-nombre/:nombresuperheroe', borrarSuperheroePorNombreController);//controlado..

export default router;