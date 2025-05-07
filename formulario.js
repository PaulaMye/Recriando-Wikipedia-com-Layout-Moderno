        // Exemplo básico de JavaScript para exibir mensagem de envio
        const formulario = document.querySelector('form');
        const mensagemEnvio = document.getElementById('mensagem-envio');

        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real do formulário
            mensagemEnvio.style.display = 'block';
            formulario.reset(); // Limpa o formulário
        });