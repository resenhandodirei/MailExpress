import 'dotenv/config';
import express from 'express';

import UserController from './app/controllers/UserController.js';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    res.send('Rota GET funcionando! 🚀');
});


app.post('/users', UserController.store); 

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
});