import fs from 'fs';

//clase para representar un Superheroe

class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
        this.id=id;
        this.nombreSuperheroe=nombreSuperheroe;
        this.nombreReal=nombreReal;
        this.nombreSociedad=nombreSociedad;
        this.edad=edad;
        this.planetaOrigen=planetaOrigen;
        this.debilidad=debilidad;
        this.poder=poder;
        this.habilidadEspecial=habilidadEspecial;
        this.aliado=aliado;
        this.enemigo=enemigo;
    }
}

//funcion para leer y ordenar los superheroes

export function leerSuperheroes(ruta){
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);

    //convertir a instancias de Superheroe
    const superheroes = superheroesArray.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    //ordenar por nombre de superheroe
    superheroes.sort((a,b) => a.nombreSuperheroe.localeCompare(
        b.nombreSuperheroe));
    return superheroes;
}

//nueva funcion para agregar superheroes
export function agregarSuperheroes(rutaOriginal, rutaNuevos){
    const datosOriginales = fs.readFileSync(rutaOriginal);
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');
    
    const superheroesOriginales = JSON.parse(datosOriginales);
    const  nuevosSuperheroes = JSON.parse(datosNuevos);

    //convertir los nuevos superheroes a instancias de Superheroe
     const instanciasNuevos = nuevosSuperheroes.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
        );


    //combinar listas
    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];

    //guardar lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');
    console.log('Lista de superheroes actualizada con exito');
}