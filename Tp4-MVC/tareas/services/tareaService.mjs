//importa la capa de persistencia (repositorio)
import TareaRepository from '../repository/TareaRepository.mjs';
import Tarea from '../models/tarea.mjs';

//instancia el repositorio para meejar las tareas
const tareaRepo = new TareaRepository();

//servicio para obtener todas las tareas
export function listarTareas(){
    //obtiene todas las tareas desde la capa de persistencia
    return tareaRepo.obtenerTodas();
}

//servicio para obtener solo las tareas completadas
export function listarTareasCompletadas(){
    //obtiene todas las tareas desde la capa de persistencia
    const tareas = tareaRepo.obtenerTodas();
    //filtramos las tareas completadas
    return tareas.filter(tarea => tarea.completado);
}

//servicio para crear una nueva tarea
export function crearTarea(id, titulo, descripcion, completado = false){
    //obtiene todas las tareas
    const tareas = tareaRepo.obtenerTodas();

    //crea una nueva instancia del modelo tarea
    const nuevaTarea = new Tarea(id, titulo, descripcion, completado);

    //valida que la tarea tenga un titulo valido
    nuevaTarea.validar();
    
    //Añade la nueva tarea a la lista de tareas
    tareas.push(nuevaTarea);

    //Guarda la lista actualizada de tareas en el archivo
    tareaRepo.guardar(tareas);
}

//Servicio para marcar una tarea como completa
export function completarTarea(id){
    //obtiene todas las tareas
    const tareas = tareaRepo.obtenerTodas();
    //encuentra la tarea por ID 
    const tarea = tareas.find(tarea => tarea.id === id);
    //si la tarea existe, la marca como completa
    if(tarea){
        tarea.completar();
        //guarda los cambios en el archivo
        tareaRepo.guardar(tareas);
    }
}

//Servicio para eliminar una tarea
export function eliminarTarea(id){
    //obtiene todas las tareas
    let tareas = tareaRepo.obtenerTodas();
    //elimina la tarea que coincida con el ID
    tareas = tareas.filter(tarea => tarea.id !== id);
    //guarda la lista actualizada de tareas
    tareaRepo.guardar(tareas);
}