//import express from 'express';
import Router from 'express';

const router = Router();

const users = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Johny', age: 26},
    {id: 3, name: 'Jane', age: 27}
];

//ruta para listar usuarios
router.get('/', (req, res) =>{
    res.render('users', {users});
});

//ruta para mostrar perfil de un usuario especifc
router.get('/:id', (req, res) =>{
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(user){
        res.render('userProfile', {user});
    }else{
        res.status(404).send('User not found');
    }
});



export default router;