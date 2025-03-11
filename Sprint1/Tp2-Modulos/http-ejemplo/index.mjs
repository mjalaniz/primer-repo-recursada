import http from 'http';

//crear servidor htttp basico   
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo');
});

//configurar el servidor para que escuche el puerto 3000
server.listen(3000, () => {
    console.log('servidor corriendo en http://127.0.0.1:3000/');
    
});