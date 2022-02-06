const carouselButtons = document.querySelectorAll('.carousel-button')

carouselButtons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.id === 'next' ? 1 : -1;;
        const slides = document.getElementById('carousel');
        const carouselNext = document.getElementById('next');
        const carouselPrev = document.getElementById('prev');

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        newIndex === 0 ? carouselPrev.classList.add('is-hidden') : carouselPrev.classList.remove('is-hidden');

        newIndex === slides.children.length - 1 ? carouselNext.classList.add('is-hidden') : carouselNext.classList.remove('is-hidden');

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        let x = window.matchMedia(`(min-width: 600px)`);

        if (x.matches) {
            console.log('this is tablet size');
            newIndex === 1 ? carouselNext.classList.add('is-hidden') : carouselNext.classList.remove('is-hidden');
        }
    })
});