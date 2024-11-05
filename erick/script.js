document.getElementById('welcomeButton').addEventListener('click', function() {
    alert('Bienvenido, este es el perfil de Erick Barbosa.');
});

document.getElementById('homeButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Por favor completa todos los campos.');
    } else {
        alert('Formulario enviado correctamente. Gracias, ' + name + '!');
        document.getElementById('contactForm').reset();
    }
});
