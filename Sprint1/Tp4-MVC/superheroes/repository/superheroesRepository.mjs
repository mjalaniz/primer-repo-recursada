import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroesDataSource from './superheroesDataSource.mjs';
//import Superheroe from '../models/superheroe.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const filePath = path.join(__dirname, '../superheroes.txt');


export default class SuperheroesFileRepository extends SuperheroesDataSource{
    constructor(){
        super();
        this.filePath = path.join(__dirname, '../superheroes.txt');
    }

    obtenerTodos(){
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data); //CONVIERTE EL ARCHIVO JSON EN UN ARRAY DE OBJETOS JS
    }

}