document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por se cadastrar na coleta seletiva! Em breve entraremos em contato.');
    this.reset();
});