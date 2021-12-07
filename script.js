const track = document.querySelector('.section-track');
const section = Array.from(track.children);
const nextButton = document.querySelector('.slide-button-down');
const prevButton = document.querySelector('.slide-button-up');
const navIndicator = document.querySelector('.indicator-container');
const indicator = Array.from(navIndicator.children);

/* för att functionen ska veta hur långt ner den ska scrolla */
const sectionHeight = section[0].getBoundingClientRect().height;

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

/* Experimental scrolljacking)
var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
        /*downscroll code here 
        const currentSection = track.querySelector('.current-section');
        const nextSection = currentSection.nextElementSibling;
        const currentLink = navIndicator.querySelector('.current-section')
        const nextLink = currentLink.nextElementSibling;
        const nextIndex = section.findIndex(section => section === nextSection)

        moveToSection(track, currentSection, nextSection);
        updateIndicator(currentLink, nextLink);
        hideShowArrows(section, prevButton, nextButton, nextIndex)
   } else {
       /* upscroll here 
       const currentSection = track.querySelector('.current-section');
       const prevSection = currentSection.previousElementSibling;
       const currentLink = navIndicator.querySelector('.current-section')
       const prevLink = currentLink.previousElementSibling;
       const prevIndex = section.findIndex(section => section === prevSection)

       moveToSection(track, currentSection, prevSection);
       updateIndicator(currentLink, prevLink);
       hideShowArrows(section, prevButton, nextButton, prevIndex)
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false); */


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


