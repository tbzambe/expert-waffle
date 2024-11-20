import express from 'express';

const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
    res.status(200).send('Helou');
})

app.listen(PORT, () => {
    console.log('Servidores escutando...');
})