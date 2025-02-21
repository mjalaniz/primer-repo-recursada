import { agregarSuperheroes, leerSuperheroes } from "./utils.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

//agregar nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

//leer y mostrar la lista de superheroes ordenada
const superheroes = leerSuperheroes('./superheroes.txt');
console.log('Superheroes ordenados');
console.log(superheroes);

/*const nuevosSuperheroes = agregarSuperheroes();
console.log('Nuevos superheroes');
console.log(nuevosSuperheroes);*/