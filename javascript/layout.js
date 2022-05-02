// index 0 = prev btn, index 1 = next btn
const layoutButtons = document.querySelectorAll('.layout-buttons')
//index 0 = start, index 1 = myCV, index 2 = contact
const indicators = document.querySelectorAll('.indicator')

//call function hideshow onload
window.onload = function () {
    alert("This is an outdated CV, see the new one at https://prisberg.github.io/CVv2/");
    
    if (window.location.href.includes('#start')) {
        indicators[0].className = 'indicator active';
    } else if (window.location.href.includes('#myCV')) {
        indicators[1].className = 'indicator active';
    } else if (window.location.href.includes('#contact')) {
        indicators[2].className = 'indicator active';
    } else {
        indicators[0].className = 'indicator active';
    }

    hideShow();
}

//indicator gets active onclick, call functions
indicators.forEach(A => {
    A.addEventListener('click', () => {
        for (let i = 0; i < indicators.length; i++)
            if (A.id === 'startIndicator') {
                indicators[i].className = 'indicator';
                indicators[0].classList.add('active');
            } else if (A.id === 'cvIndicator') {
                indicators[i].className = 'indicator';
                indicators[1].classList.add('active');
            } else {
                indicators[i].className = 'indicator';
                indicators[2].classList.add('active');
            }

        hideShow();
    })
})

// layout button hide or show
function hideShow() {
    if (indicators[0].classList.contains('active')) {
        layoutButtons[0].classList.add('is-hidden');
        layoutButtons[1].classList.remove('is-hidden');
    } else if (indicators[2].classList.contains('active')) {
        layoutButtons[0].classList.remove('is-hidden');
        layoutButtons[1].classList.add('is-hidden');
    } else {
        layoutButtons[0].classList.remove('is-hidden');
        layoutButtons[1].classList.remove('is-hidden');
    }
};

// prev layout button move function
layoutButtons[0].addEventListener('click', () => {

    if (window.location.href.includes('#myCV')) {
        indicators[0].click();
    } else {
        indicators[1].click();
    }
})

//next layout button move function
layoutButtons[1].addEventListener('click', () => {

    if (window.location.href.includes('#myCV')) {
        indicators[2].click();
    } else {
        indicators[1].click();
    }
})
