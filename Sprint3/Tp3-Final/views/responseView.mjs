
//cofiguro la funcion  de representacion de datos
//export function renderizarSuperheroe(superheroe){
export const renderizarSuperheroe = (superheroe) => {

    return {
        //"id": superheroe.id,
        Nombre : superheroe.nombreSuperHeroe,
        "Nombre Real" : superheroe.nombreReal,
        Edad : superheroe.edad,
        "Planeta de  Origen" : superheroe.planetaOrigen,
        Debilidad : superheroe.debilidad,
        Poderes : superheroe.poderes,
        Aliados : superheroe.aliados,
        Enemigos : superheroe.enemigos
    };
}

//export function renderizarListaSuperheroes(superheroes){
export const renderizarListaSuperheroes = (superheroes) => {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));

}

export const renderizarMensajeDeOperacion = (mensaje, detalle = null) => {
    return {
        mensaje, 
        detalle
    }
}
