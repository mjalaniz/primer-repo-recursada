//funcion para renderizar una lista de tareas en formato JSON
export function renderizarListaTareas(tareas){
    //formatea el array de tareas en formato JSON con identacion
    return JSON.stringify(tareas, null, 2);
}

//funcion para renderizar un mensaje generico en formato JSON
export function renderizarMensaje(mensaje){
    //envuelve un mensaje en formato JSON
    return JSON.stringify({mensaje}, null, 3);
}

//funcion para renderizar una tarea especifica en formato JSON
export function renderizarTarea(tarea){
    //formato una tarea individual en formato JSON con identacion
    return JSON.stringify(tarea, null, 2);
}