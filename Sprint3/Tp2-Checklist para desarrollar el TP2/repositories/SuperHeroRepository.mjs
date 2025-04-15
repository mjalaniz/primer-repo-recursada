import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

//configuro repositorio para metodos definidos en la interfaz. Esto mejora la organizacion y garantiza acceso a datos.
class SuperHeroRepository extends IRepository {
  
    async obtenerPorId(id){ //buscar por el ID , agregar en el Modelo el atributo id y en el responseView(renderizado)

        //const superHero = await SuperHero.findOne({ id: Number(id) });  
        const superHero = await SuperHero.findById(id);   
    
    
        if (!superHero) {
            console.log('Superhéroe no encontrado.');
        }
    
        return superHero;
    }

    async obtenerTodos() { //trae todos los superheroes
        return await SuperHero.find({});
    }
       
    /*async buscarPorAtributo(atributo, valor) { //busqueda por algun atributo y valor
        return await SuperHero.find({[atributo]: valor});
    }*/
    
    async buscarPorAtributo(atributo, valor) {
        try{
          if(atributo!='edad'){
            const query = {[atributo]: new RegExp(valor, 'i')};
            return await SuperHero.find(query);
          }else{
            const query = {[atributo]: valor};
            return await SuperHero.find(query);
          }
        }catch(error){
          console.log('Error al obtener heroes: ', error);
          throw error;
        }
   
    }

    
   /* async obtenerMayoresDe30(){ //trae los mayores a 30
        //return await SuperHero.find({edad: {$gt:30}});
                try {
                    return await SuperHero.find({
                      edad: { $gt: 30 }, // Filtra por edad
                      planetaOrigen: 'Tierra', // También filtra por planeta de origen
                      /*$and: [             
                        { poderes: { $exists: true, $type: "array" } }, // Verifica que "poderes" sea un arreglo
                                           { $expr: { $gte: [{ $size: "$poderes" }, 2] } } // Condición de tamaño mínimo
                       ]*/
                    /*});
                  } catch (error) {
                    console.error('Error al obtener superhéroes mayores de 30:', error);
                    throw error;
                  }
    }*/

    async  obtenerMayoresDe30() {
        try {
            return await SuperHero.find({
                edad: { $gt: 30 },
                planetaOrigen:{ $eq:'Tierra'}, 
                $and:[ {poderes: { $exists: true, $type: 'array' }}, {$expr: { $gte: [{ $size: "$poderes" }, 2] }} ]
            });

        } catch (error) {
            
            console.error('Error al obtener los héroes:', error);
            throw error; // Re-lanzamos el error para que pueda ser manejado fuera si es necesario
        }
    
    }

    async nuevoSuperHeroe(datosSuperHeroe){
        const nuevoSuperheroe = new SuperHero(datosSuperHeroe);
        return await nuevoSuperheroe.save();
    }

    async actualizarSuperHeroe(id, datosActualizados){
        return await SuperHero.updateOne(
            {_id: id}, datosActualizados,
            {new: true}
            //{$set: datosActualizados}
        );
    }

    async borrarPorId(id) {
        return await SuperHero.deleteOne({_id:id});
        
    }
   
    async borrarPorNombre(nombre) {
        return await SuperHero.findOneAndDelete('{ nombreReal: nombre }');
        //return await SuperHero.findOneAndDelete({nombreReal: new RegExp(nombreReal, 'i') });
    }

}


export default new SuperHeroRepository();
