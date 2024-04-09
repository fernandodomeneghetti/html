function validateForm(event) {
    event.preventDefault(); // Previne o envio do formulário de forma padrão
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Validação
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Envie o formulário
    document.getElementById('contactForm').submit();
}