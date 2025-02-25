//definimos una clase que actua como interfaz para la persistencia de datos

export default class TareasDataSource {

    //metodo abstracto para obtener todas las tareas
    obtenerTodas(){
        throw new Error('Este metodo debe ser implementado por la subclase');
    }

    //metodo abastracto para guardar todas las tareas
    guardar(tareas){
        throw new Error('Este metodo debe ser implementado por la subclase');
    }

    //metodo abstracto para eliminar una tarea por ID
    eliminar(id){
        throw new Error('Este metodo debe ser implementado por la subclase');
    }
}