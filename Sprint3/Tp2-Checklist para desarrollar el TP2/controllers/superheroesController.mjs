
import { obtenerTodosLosSuperheroes, 
    obtenerSuperheroePorId, 
    buscarSuperheroesPorAtributo, 
    obtenerSuperheroesMayoresDe30, 
    nuevoSuperHeroe, 
    actualizarSuperHeroe, 
    borrarSuperheroePorId, 
    borrarSuperheroePorNombre  } from '../services/superheroesService.mjs';

import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

//configuro controlador para gestionar solicitudes HTTP
export async function obtenerSuperheroePorIdController(req, res){
    const { id } = req.params;
    const superheroe = await obtenerSuperheroePorId(id);
    
    if(superheroe){
        res.send(renderizarSuperheroe(superheroe));
    }
    else{
        res.status(404).send({mensaje: "Superheroe no encontrado"});
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
    const {atributo, valor} = req.params;
    const superheroe = await buscarSuperheroesPorAtributo(atributo, valor);
    if(superheroe.length > 0){
        res.send(renderizarListaSuperheroes(superheroe));
    }else{
        res.status(404).send({mesaje: "No se encontraron superheroes con ese atributo"});
    }
}


export const obtenerSuperheroesMayoresDe30Controller = async (req, res) => {
    const superheroes = await obtenerSuperheroesMayoresDe30();
    if(superheroes){
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send({mensaje: "superheros no encontrados"});
    }
}



export const nuevoSuperHeroeController = async (req, res) => {
    try {
        const datosSuperHeroe = req.body;
        const superheroe = await nuevoSuperHeroe(datosSuperHeroe);
        if(superheroe){
            res.send(renderizarSuperheroe(superheroe));
        }else{
            res.status(400).send({mensaje: "No se puede insertar el superhéroe", error: error.message});
        }
        
    } catch (error) {
        res.status(400).send({mensaje: "error al insertar el nuevo superhéroe", error: error.message});     
    }
}

export const actualizarSuperHeroeController = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const superheroe = await actualizarSuperHeroe(id, datosActualizados);
    if(superheroe){
        res.send(renderizarSuperheroe(superheroe));
        //res.status(200).json(superheroe);

    } else {
        res.status(404).send({mensaje: "error al actualizar el super heroe"});
    }
}

export async function borrarSuperHeroeIdController(req, res) {
    const { id } = req.params; //id a borrar
    try {
        const superheroeBorrado = await borrarSuperheroePorId(id);

        if (!superheroeBorrado) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        // Devolver el superhéroe borrado
        res.status(200).send({mensaje:'superheroe eliminado'});
        //res.status(200).json(superheroeBorrado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al borrar el superhéroe', error: error.message });
    }    
}

export async function borrarSuperheroePorNombreController(req, res) {
    const { nombreReal } = req.params; // Nombre del superhéroe que se quiere borrar

    console.log(nombreReal);
    const resultado = await borrarSuperheroePorNombre(nombreReal);
    if(resultado){
        res.send(renderizarSuperheroe(resultado));
        //res.send(renderizarMensajeDeOperacion("El superheroe ha sido eliminado", renderizarSuperheroe(resultado)));
    } else {
        res.status(404).send("Superheroes no encontrado");
        //res.status(404).send(renderizarMensajeDeOperacion("Superheroe no encontrado"));
    }

    /*try {
        const superheroeBorrado = await borrarSuperheroePorNombre(nombreReal);

        if (!superheroeBorrado) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        // Devolver el superhéroe borrado
        res.status(200).json(superheroeBorrado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al borrar el superhéroe', error: error.message });
    }*/
}