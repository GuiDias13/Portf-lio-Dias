// Formulário

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Envia o formulário usando AJAX
    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            form.reset(); // Limpa o formulário
        } else {
            alert('Ocorreu um erro ao enviar a mensagem.');
        }
    }).catch(error => {
        alert('Ocorreu um erro ao enviar a mensagem.');
    });
});