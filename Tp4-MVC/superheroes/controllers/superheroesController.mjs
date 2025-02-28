import { obtenerSuperheroesPorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from "../services/superheroesService.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes } from "../views/responseView.mjs"

export function obtenerSuperheroesPorIdController(req,res){
    const {id} = req.params;
    const superheroe = obtenerSuperheroesPorId(parseInt(id));

    if(superheroe) {
        res.send(renderizarSuperheroe(superheroe));
    }else{
        res.status(404).send({mensaje: "Superheroe no encontrado"});
    }
}

export function buscarSuperheroePorAtributoController(req,res){
    const {atributo, valor} = req.params;
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);


    if (superheroes.length > 0) {


    }
}