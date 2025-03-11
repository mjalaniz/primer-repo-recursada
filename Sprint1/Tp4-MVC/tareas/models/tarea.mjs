export default class Tarea{
    constructor(id, titulo, descripcion, completado = false){
        this.id = id; //identificador uniuco de la tarea
        this.titulo = titulo; //titulo de la tarea
        this.descripcion = descripcion; //Descripcion de la tarea
        this.completado = completado; //estado de completado, ppor defecto es false
    }

    //metodo para marcar una tarea como comopletada
    completar(){
        this.completado = true; //cambia el etado de completado a true
    }

    //metedo para validar que el titulo de la tarea no este vacio
    validar(){
        if(!this.titulo || this.titulo.trim() === ''){
            throw new Error('El titulo de la tarea es obligatorio');
       }
    }
}
