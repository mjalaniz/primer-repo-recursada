// service/superheroesService.mj
//import superHero from '../models/SuperHero.mjs';
//import SuperheroesRepository from '../repository/superheroesRepository.mjs';
import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

//instancia el repositorio para meejar las tareas
//const repository = new SuperheroesRepository();

export async function obtenerSuperheroePorId(id){
    return await SuperHeroRepository.obtenerPorId();
    //const superheroes = repository.obtenerTodos(); 
//    return superheroes.find(hero => hero.id === id);
}

export async function obtenerTodosLosSuperheroes(){
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor){
    return await SuperHeroRepository.buscarPorAtributo(atributo,valor);
}

export async function obtenerSuperheroesMayoresDe30(){
    
    return await SuperHeroRepository.obtenerMayoresDe30();
    
    /*const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero =>
        hero.edad > 30 && hero.planetaOrigen == 'Tierra' && hero.poder.length >=2
    );*/
}
