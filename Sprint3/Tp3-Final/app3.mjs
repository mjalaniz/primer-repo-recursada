import express from 'express';

import userRoutes from './routes/userRoutes.mjs';

const app = express();

app.set('view engine', 'ejs');
app.use('/otros', userRoutes);

app.listen(3001, () =>{
    console.log('server corriendo en puerto 3000');
});