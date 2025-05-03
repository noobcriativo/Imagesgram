document.addEventListener('DOMContentLoaded', () => {
    const PostGrid = document.querySelector('.profile-posts-grid');
    const NumberImages = 20;
    const modal = document.getElementById('modal');
    const modalImg = modal.querySelector('img');
    const closeBtn = document.getElementById('close-modal');
    const usernames = ['user1', 'user2', 'user3', 'user4', 'user5'];

    for (let i = 0; i < NumberImages; i++) {
        const ImageLink = document.createElement('a');
        const ImageGrid = document.createElement('img');
        ImageLink.href = '#';
        ImageGrid.src = 'img/cover.png';
        ImageGrid.alt = 'Image by ${usernames[i % usernames.length]}';
        ImageGrid.dataset.full ="img/cover.png";
        ImageGrid.className ="thumbnail";
        
        ImageLink.appendChild(ImageGrid); 
        PostGrid.appendChild(ImageLink);
    }

    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
          const fullSrc = thumb.getAttribute('data-full');
          modalImg.src = fullSrc;
          modal.classList.remove('hidden');
          modal.style.display = 'flex';
        });
    });

    // Fechar o modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; 
        modalImg.src = ''; // limpa a imagem
    });


});