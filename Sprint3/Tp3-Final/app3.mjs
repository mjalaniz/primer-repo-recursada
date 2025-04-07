import express from 'express';

import useRoutes from './routes/userRoutes.mjs';

const app = express();

app.set('view engine', 'ejs');
app.use('/users', useRoutes);

app.listen(3001, () =>{
    console.log('server corriendo en puerto 3000');
});