document.addEventListener("DOMContentLoaded", function () {
    const loveButton = document.getElementById('loveButton');
    const loveMessage = document.getElementById('loveMessage');

    loveButton.addEventListener('click', function () {
        showLoveMessage();
        addLoveGif();
    });

    function showLoveMessage() {
        // Torna a mensagem visível
        loveMessage.style.opacity = '1';
    }

    function addLoveGif() {
        // Cria e adiciona o elemento de imagem (GIF)
        const loveGif = document.createElement('img');
        loveGif.src = 'https://usagif.com/wp-content/uploads/gif-heart-51.gif';  // Substitua com o caminho real do seu GIF
        loveGif.alt = 'Amor GIF';

        // Define as dimensões desejadas (por exemplo, 150x150 pixels)
        loveGif.style.width = '150px';
        loveGif.style.height = '150px';

        // Adiciona o GIF à div de conteúdo
        const container = document.querySelector('.container');
        container.appendChild(loveGif);
    }
});

