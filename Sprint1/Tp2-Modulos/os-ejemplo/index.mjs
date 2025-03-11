import os from 'os';

//obtener la qruitectura del sistema
console.log('Arquitectura', os.arch());

//obtener el tipo de sistema operativo
console.log('Plataforma', os.platform());

//obtener cantidad total de memoria
console.log('Memoria total: ',os.totalmem());

//obtener la memoria libre
console.log('Memoria libre',os.freemem());

//obtener imformacion del CPU
console.log('Informacion de la CPU: ', os.cpus());





