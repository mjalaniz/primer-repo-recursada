
import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

export function obtenerSuperheroePorIdController(req, res){
try{    
    const { id } = req.params;
    const superheroe = obtenerSuperheroePorId(parseInt(id));

    if(!superheroe){
        res.status(404).send({mensaje: "Superheroe no encontrado"});
    }
    
    const superheroeFormateado = renderizarSuperheroe(superheroe);
    res.status(200).json(superheroeFormateado);
    } catch (error){
        res.status(500).send({mensaje: "Error al obtener el superheroe", error:error.message});
    }
}


export async function obtenerTodosSuperheroesController(req, res){
   try{
    
    const superheroes = await obtenerTodosLosSuperheroes();
    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);

   } catch (error) {
        res.status(500).send({mensaje: 'Error al obtener los superheroes',error:error.message});
   }
}

export async function buscarSuperheroesPorAtributoController(req, res){
    try{
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if(superheroes.length === 0){
            res.status(404).send({mesaje: "No se encontraron superheroes con ese atributo"});   
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
        }catch{
            res.status(500).send({mensaje: "Error al buscar los superheroes", error:error.message});
        }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res){
    try{
        const superheroes = await obtenerSuperheroesMayoresDe30();
        if(superheroes.length === 0){
            res.status(404).send({mensaje: "No se encontraron superheroes mayores a 30"});
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }catch (error) {
        res.status(500).send({mensaje:"Erro al obtener superheores mayores de 30", error:error.message});
    }
    
}