import express from 'express';
import Queue from './app/lib/Queue.js'; 
import UserController from './app/controllers/UserController.js';
import { BullAdapter } from 'bull-board/bullAdapter.js'; // Importando do submódulo correto
import { createBullBoard } from 'bull-board';

const app = express();

app.use(express.json());

 
app.get('/users', (req, res) => {
    res.send('Rota GET funcionando! 🚀');
});

app.post('/users', UserController.store, (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' });
    }

    res.status(201).json({ message: 'Usuário criado com sucesso!', user: { name, email } });
}); 

// Criando a UI do Bull Board
const { router } = createBullBoard([
    new BullAdapter(Queue.queues[0].bull), // Verifique se há filas disponíveis antes de acessar
]);

app.use('/admin/queues', router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
});