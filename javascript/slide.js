const track = document.querySelector('.section-track');
const section = Array.from(track.children);
const nextButton = document.querySelector('.slide-button-down');
const prevButton = document.querySelector('.slide-button-up');
const navIndicator = document.querySelector('.indicator-container');
const indicator = Array.from(navIndicator.children);
const sectionHeight = section[0].getBoundingClientRect().height;

//variables for bootstrap manipulation
const bootPrev = document.querySelector('.carousel-control-prev');
const bootNext = document.querySelector('.carousel-control-next');

bootPrev.addEventListener('click', e => {
    setTimeout(function () {
        if (bootNext.classList.contains('is-none')) {
        bootNext.classList.remove('is-none');
    }   else {
        bootPrev.classList.add('is-none');
    }
    }, 600);
})
bootNext.addEventListener('click', e => {
    setTimeout(function () {
        if (bootPrev.classList.contains('is-none')) {
        bootPrev.classList.remove('is-none');
    }   else {
        bootNext.classList.add('is-none');
    }
    }, 600);
})
/* 
bootPrev.addEventListener('click', e => {
    //non clickable after click code
    if (!moving) {
        setTimeout(bootHide, 625);
    }
})

bootNext.addEventListener('click', e => {
    //non clickable after click code
    if (!moving) {
        setTimeout(bootHide, 625);
    }
})
//not working
function disableInteraction() {
    moving = true
    const bootButtons = document.querySelectorAll('.boot-hide')
    if (moving) {
        bootNext.classList.add('pointer-event')
        bootPrev.classList.add('pointer-event')
    }
    setTimeout(() => {
        moving = false
        bootNext.classList.remove('pointer-event')
        bootPrev.classList.remove('pointer-event')
    }, 2000);
}

function bootHide() {
    const bootCarousel = document.querySelector('.carousel-inner');
    const carouselChildren = Array.from(bootCarousel.children);
    if (carouselChildren[0].className === 'carousel-item active') {
        bootPrev.classList.add('is-none');
    } else if (carouselChildren[carouselChildren.length - 1].className === 'carousel-item active') {
        bootNext.classList.add('is-none');
    } else {
        bootNext.classList.remove('is-none');
        bootPrev.classList.remove('is-none');
    } */

/* States how many pixels the height of a section is */

const setSectionPosition = (section, index) => {
    section.style.top = sectionHeight * index + 'px';
};

section.forEach(setSectionPosition);

/* arrow buttons */
const moveToSection = (track, currentSection, targetSection) => {
    track.style.transform = 'translateY(-' + targetSection.style.top + ')';
    currentSection.classList.remove('current-section');
    targetSection.classList.add('current-section')
}
/* hide arrows */
const hideShowArrows = (section, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === section.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

/* when i click up, move to previous section */
prevButton.addEventListener('click', e => {
    const currentSection = track.querySelector('.current-section');
    const prevSection = currentSection.previousElementSibling;
    const currentLink = navIndicator.querySelector('.current-section')
    const prevLink = currentLink.previousElementSibling;
    const prevIndex = section.findIndex(section => section === prevSection)

    moveToSection(track, currentSection, prevSection);
    updateIndicator(currentLink, prevLink);
    hideShowArrows(section, prevButton, nextButton, prevIndex)
})

/* when i click down, move to next section */
nextButton.addEventListener('click', e => {
    const currentSection = track.querySelector('.current-section');
    const nextSection = currentSection.nextElementSibling;
    const currentLink = navIndicator.querySelector('.current-section')
    const nextLink = currentLink.nextElementSibling;
    const nextIndex = section.findIndex(section => section === nextSection)

    moveToSection(track, currentSection, nextSection);
    updateIndicator(currentLink, nextLink);
    hideShowArrows(section, prevButton, nextButton, nextIndex)
})

/* Disable scrolling */
window.addEventListener('load', (disableScroll) => {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
        window.scrollTo(scrollTop);
    };
})

/*Active nav-links get styling*/
const updateIndicator = (currentLink, targetLink) => {
    currentLink.classList.remove('current-section');
    targetLink.classList.add('current-section');
}

/* when i click the nav-links, move to selected section */
navIndicator.addEventListener('click', e => {
    const targetLink = e.target.closest('.section-indicator');


    if (!targetLink) return;

    const currentSection = track.querySelector('.current-section')
    const currentLink = navIndicator.querySelector('.current-section')
    const targetIndex = indicator.findIndex(indicator => indicator === targetLink)
    const targetSection = section[targetIndex];

    moveToSection(track, currentSection, targetSection);
    updateIndicator(currentLink, targetLink);
    hideShowArrows(section, prevButton, nextButton, targetIndex)
})