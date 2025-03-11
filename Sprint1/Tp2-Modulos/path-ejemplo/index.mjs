import path from "path";

//defino ruta de ejemplo
const filePath = './data/example.txt';

//obtener el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base: ',dirName);

//obtener nombre de archivo sin extension
const baseName = path.basename(filePath,'.txt');
console.log('Nombre del archivo: ',baseName);

//obtener extension del archivo
const extName = path.extname(filePath);
console.log('Extension del archivo: ', extName);

//crear Ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta: ',newPath);


