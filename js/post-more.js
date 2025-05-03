document.addEventListener('DOMContentLoaded', () => {
    const postFooters = document.querySelectorAll('article.post footer');

    postFooters.forEach(footer => {
    
        const comentarioContainer = footer.querySelector('.comentario-container');
    
        if (comentarioContainer) {
            const comentario = comentarioContainer.querySelector('.comentario');
            const verMaisBtn = comentarioContainer.querySelector('.more');

            if (comentario && verMaisBtn) {
                const lineHeight = parseFloat(window.getComputedStyle(comentario).lineHeight) || 1.5;
                const maxHeight = lineHeight * 1;

                if (comentario.offsetHeight > maxHeight) {
                    verMaisBtn.classList.remove('escondido');
                    
                    verMaisBtn.addEventListener('click', () => {
                        comentario.classList.remove('limitado');
                        comentario.classList.add('expandido');
                        verMaisBtn.classList.add('escondido');
                    });
                } else {
                    verMaisBtn.classList.add('escondido');
                }
            }
        }
    });
});