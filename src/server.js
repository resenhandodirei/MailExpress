import express from 'express';
import Queue from './app/lib/Queue.js'; 
import { BullAdapter } from 'bull-board/bullAdapter.js'; // Importando do submódulo correto
import { createBullBoard } from 'bull-board';

const app = express();

// Criando a UI do Bull Board
const { router } = createBullBoard([
    new BullAdapter(Queue.queues[0].bull), // Verifique se há filas disponíveis antes de acessar
]);

app.use('/admin/queues', router);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
