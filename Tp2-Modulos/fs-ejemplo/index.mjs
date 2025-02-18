import fs from 'fs';

//leer archivo de manera asincronica
fs.readFile('./ejemplo.txt', 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log('Contenido del arhivo:', data);
});

//escribir en un nuevo archivo
fs.writeFile('./nuevoArchivo.txt', 'Hola mundo!, en nuevo archivo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');
    
});

//renombrar archivo
fs.rename('./nuevoArchivo.txt', './nuevoArchivoRenombrado.txt', (err)=>{
    if(err) throw err;
    console.log('Archivo renombrado');
    
});