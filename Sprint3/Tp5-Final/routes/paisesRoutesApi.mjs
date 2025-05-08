import express from 'express';
import { cargarPaises, paisesEspanol, addPais , editarPaises,  renderPaisEditar, eliminarPais, importarPaisesController, renderizarInicioController, renderizarQuinesSomosController}
from '../controllers/paisesApiController.mjs';

// Importa las validaciones desde el middleware
import { 
    insertarPaisValidationRules, 
    actualizarPaiseValidationRules,
    preprocesarDatos
} from '../validators/validationRules.mjs';  // Asegúrate de que la ruta sea correcta

import { handleValidationErrors, handleValidationErrorsEditar } from '../validators/errorMiddleware.mjs';// Importa el middleware de validación de errores



const routerApi = express.Router();

routerApi.get('/paises', renderizarInicioController);

routerApi.get('/importar', importarPaisesController);

//cargar todos los países desde la API
routerApi.get('/cargar-paises', cargarPaises); 
//filtrar los resultados en paises que hablen español
routerApi.get('/paises-espaniol', paisesEspanol);

routerApi.get('/quienessomos', renderizarQuinesSomosController);

//agregar un nuevo país
routerApi.get('/agregar-pais', (req, res)=>{
    const datosPais = ""; // la primera vez datosPais va vacio
    res.render('agregarPais',  {errors: [], datosPais, title: 'agregar Pais'}) 
});
routerApi.post('/agregar-pais', 
    preprocesarDatos,
    insertarPaisValidationRules(),  // Valida los campos antes de procesar
    handleValidationErrors,  // Middleware que maneja los errores de validación
    addPais);

//cargar el formulario de edición
routerApi.get('/editar-pais/:id', renderPaisEditar);

//editar un país formulario
routerApi.post('/editar-pais/:id',
    preprocesarDatos,
    actualizarPaiseValidationRules(),  // Valida los campos antes de procesar
    handleValidationErrorsEditar,  // Middleware que maneja los errores de validación
    editarPaises);

    //elimina el pais
routerApi.delete('/eliminar-pais/:id', eliminarPais);



export default routerApi;