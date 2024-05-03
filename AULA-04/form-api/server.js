const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
    const { nome, email, mensagem } = req.body;
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);
    res.json({ message: 'Dados recebidos com sucesso!' });
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
