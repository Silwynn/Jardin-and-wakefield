document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const items = document.querySelectorAll('.carousel-item');
    
    let index = 0;
    
    function updateCarousel() {
        const offset = -index * 100;
        carouselWrapper.style.transform = `translateX(${offset}%)`;
    }
    
    nextButton.addEventListener('click', () => {
        index = (index + 1) % items.length;
        updateCarousel();
    });
    
    prevButton.addEventListener('click', () => {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
    });
    
    updateCarousel();
});
