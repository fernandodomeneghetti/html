const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para lidar com o envio do formulário
app.post('/submit_form', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Formulário recebido:');
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);
    
    // Você pode adicionar aqui lógica adicional, como salvar os dados em um banco de dados
    
    res.send('Formulário recebido com sucesso!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
