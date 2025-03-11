import express from 'express';

//crear una instanca de express
const app = express();

//configurar el puerto del servidor
const PORT = 3000;

//ruta Get con parametro de ruta
//solicitud :http://localhost:3000/user/123
app.get('/user/:id', (req,res)=>{
    const userId = req.params.id;
    console.log(`Id del usuario recibido: ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`);
});

//inicar server
app.listen(PORT, ()=>{
    console.log(`Server corriendo el http://localhost:${PORT}`);
    
})