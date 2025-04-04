class IRepository{
     
    //configuro respositorio que asegura que cualquier clase que implemente interfaz, tenga estos metodos
    obtenerPorId(id){
    throw new Error("Metodo 'obtenerPoId()' no implementado");
    }    

    obtenerTodos(){
        throw new Error("Metodo 'obtenerTodos()' no implementado");
    }
     

    buscarPorAtributo(atributo, valor) {
        throw new Error("Metodo 'buscarPorAtributo' no implementado");
    }

    obtenerMayoresDe30(){
        throw new Error("Metodo 'obtenerMayoresDe30()' no implementado");
    }

    nuevoSuperHeroe(datosSuperHeroe){
        throw new Error("Método 'nuevoSuperheroe(datosSuperHeroe)' no implementado");
    }
    actualizarSuperHeroe(id, datosActualizados){
        throw new Error("Método 'actualizarsuperHero(id, datosActualizados)' no implementado");
    }
}

export default IRepository;