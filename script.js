document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro enviado com sucesso! Em breve a Promoção Humana entrará em contato.');
    this.reset();
});