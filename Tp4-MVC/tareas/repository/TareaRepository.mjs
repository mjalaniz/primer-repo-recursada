import fs from 'fs'; // Importamos el modulo del sistema de archivos de Node.js
import path from 'path'; //modulo para manejar rutas de archivos

import { fileURLToPath } from 'url'; //para obtener la rura del archivo actual

//importamos la interfaz de persistencia
import TareasDataSource from './TareaDataSource.mjs';
import Tarea from '../models/tarea.mjs'; //importamos el modelo Tarea

//obtener la ruta del archivvo de tareas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../tareas.txt');

//implementacion concreta que extiende la intefaz TareasDataSource
export default class TareaRepository extends TareasDataSource {
    constructor(){
        super(); //llamada al constructor de la clase base
    }

    //implementacion del metodo obtenerTodas()
    obtenerTodas(){
        try{
            //leer el archivo de texto  en formato UFT-8
            const data = fs.readFileSync(filePath, 'utf-8');
            //convertir el contenido del archivo a un arreglo de objetos JSON
            const tareas = JSON.parse(data);
            //convertir cada tarea en una instancia de la clase Tarea
            return tareas.map(tareaData => new Tarea(
                tareaData.id,
                tareaData.titulo,
                tareaData.descripcion,
                tareaData.completado
            ));

        }catch (error) {
            //si ocurre un error, com que el archivo no existe, devolvemos un array vacio
            console.log('Error al leer el archivo de tareas: ', error);
            return[];
        }
    }

    //Implementacion del metodo guardar()
    guardar(tareas){
        try{
            //Convertimos el array de tareas a una cadena JSON con identacion de 2 espacios
            const data = JSON.stringify(tareas, null, 2);
            //guardar la cadena JSON en el archivo de texto
            fs.writeFileSync(filePath, data,'utf-8');

        }catch(error){
            //si ocurre un error al guadar los datos, mostramos el error
            console.log('Error al guardar las tareas: ', error);
        }
    }
    //Implementacion del metodo eliminar()
    eliminar(id){
        try{
            const tareas = this.obtenerTodas(); //Obtener todas las tareas existentes
            //filtrar la tarea por ID
            const tareasActualizadas = tareas.filter(tarea =>tarea.id != id);
            this.guardar(tareasActualizadas); //guardar la lista actualizada
        }
        catch(error){
            console.log('Error al eliminar la tarea: ',error);         
        }
    }
}