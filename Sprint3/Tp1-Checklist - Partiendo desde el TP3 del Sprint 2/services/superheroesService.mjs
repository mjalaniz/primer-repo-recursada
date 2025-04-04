
import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

//se configura la logica del negocio,usando los metodos del repositorio.
export async function obtenerSuperheroePorId($id){
    return await SuperHeroRepository.obtenerPorId($id);
}

export async function obtenerTodosLosSuperheroes(){
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor){
    return await SuperHeroRepository.buscarPorAtributo(atributo,valor);
}

export async function obtenerSuperheroesMayoresDe30(){
    return await SuperHeroRepository.obtenerMayoresDe30();
}
export const nuevoSuperHeroe = async (datosSuperHeroe) => {
    return await SuperHeroRepository.nuevoSuperHeroe(datosSuperHeroe);
}

export const actualizarSuperHeroe = async (id, datosActualizados) => {
    return await SuperHeroRepository.actualizarSuperHeroe(id, datosActualizados);
}

export async function borrarSuperheroePorId(id) {
    return await SuperHeroRepository.borrarPorId(id);
}

export async function borrarSuperheroePorNombre(nombreSuperHeroe) {
    return await SuperHeroRepository.borrarPorNombre(nombreSuperHeroe);
}