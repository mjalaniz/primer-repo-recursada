import { EventEmitter } from "events";

//crear una instancia de EventEmitter
const emitter = new EventEmitter(); 

//definir un evento personalizado
emitter.on('saludo', (nombre) => {
    console.log(`Hola ${nombre}!`);
});

//emitir evento 'saludo'
emitter.emit('saludo', 'Jose');