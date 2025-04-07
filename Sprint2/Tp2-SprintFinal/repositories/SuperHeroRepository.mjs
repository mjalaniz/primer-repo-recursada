import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';
import mongoose from "mongoose";

//configuro repositorio para metodos definidos en la interfaz. Esto mejora la organizacion y garantiza acceso a datos.
class SuperHeroRepository extends IRepository {
  
    async obtenerPorId(id){ //buscar por el ID , agregar en el Modelo el atributo id y en el responseView(renderizado)

        const superHero = await SuperHero.findOne({ id: Number(id) });   
    
    
        if (!superHero) {
            console.log('Superhéroe no encontrado.');
        }
    
        return superHero;
    }

    async obtenerTodos() { //trae todos los superheroes
        return await SuperHero.find({});
    }
       
    async buscarPorAtributo(atributo, valor) { //busqueda por algun atributo y valor
        
        return await SuperHero.find({[atributo]: valor});
        
    }

    async obtenerMayoresDe30(){ //trae los mayores a 30
        //return await SuperHero.find({edad: {$gt:30}});

        try {
            return await SuperHero.find({
              edad: { $gt: 30 }, // Filtra por edad
              planetaOrigen: 'Tierra', // También filtra por planeta de origen
              //poderes: { $size: 2} //{$gte: 2} } // esto da = a 2 Poderes. 
              /*$and: [             
                { poderes: { $exists: true, $type: "array" } }, // Verifica que "poderes" sea un arreglo
                                   { $expr: { $gte: [{ $size: "$poderes" }, 2] } } // Condición de tamaño mínimo
               ]*/
            });
          } catch (error) {
            console.error('Error al obtener superhéroes mayores de 30:', error);
            throw error;
          }
    }
}

export default new SuperHeroRepository();
