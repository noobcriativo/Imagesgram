document.addEventListener('DOMContentLoaded', () => {
    const storiesContainer = document.querySelector('.story-container');
    const prevButton = document.querySelector('.story-nav--prev');
    const nextButton = document.querySelector('.story-nav--next');

    if (prevButton && nextButton && storiesContainer) {
    prevButton.addEventListener('click', () => {
        storiesContainer.scrollLeft -= 600;
    });

    nextButton.addEventListener('click', () => {
      storiesContainer.scrollLeft += 600;
    });

    const updateNavVisibility = () => {
      const isAtStart = storiesContainer.scrollLeft === 0;
      const isAtEnd = storiesContainer.scrollLeft + storiesContainer.offsetWidth >= storiesContainer.scrollWidth - 1;

      prevButton.style.display = isAtStart ? 'none' : 'inline-block';
      nextButton.style.display = isAtEnd ? 'none' : 'inline-block';
    };

    storiesContainer.addEventListener('scroll', updateNavVisibility);
    updateNavVisibility(); // Chamada inicial
  }
});
