import express from 'express';

//crear una instanca de express
const app = express();

//configurar el puerto del servidor
const PORT = 3000;

//ruta Get con parametro de consulta
//solicitud :http://localhost:3000/profile?edad=45
app.get('/profile', (req,res)=>{
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});

//inicar server
app.listen(PORT, ()=>{
    console.log(`Server corriendo el http://localhost:${PORT}`);
    
})