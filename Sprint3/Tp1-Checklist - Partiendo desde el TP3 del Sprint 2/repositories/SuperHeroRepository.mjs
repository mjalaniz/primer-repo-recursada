import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

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
        return await SuperHero.find({edad: {$gt:30}});
    }

    async nuevoSuperHeroe(datosSuperHeroe){
        const nuevoSuperheroe = new SuperHero(datosSuperHeroe);
        return await nuevoSuperheroe.save();
    }

    async actualizarSuperHeroe(id, datosActualizados){
        return await SuperHero.updateOne(
            {id: id}, datosActualizados,
            {new: true}
            //{$set: datosActualizados}
        );
    }

    async borrarPorId(id) {
        return await SuperHero.findByIdAndDelete(id);
    }
   
    async borrarPorNombre(nombreSuperHeroe) {
        return await SuperHero.findOneAndDelete({ nombreSuperheroe: nombreSuperHeroe });
    }

}


export default new SuperHeroRepository();
