import express from 'express';

//crear una instanca de express
const app = express();

//configurar el puerto del servidor
const PORT = 3000;

//ruta basica
app.get('/', (req,res)=>{
    res.send('Esto es Express');
});

//inicar server
app.listen(PORT, ()=>{
    console.log(`Server corriendo el http://localhost:${PORT}`);
    
})