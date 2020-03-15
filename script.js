const NAV = document.querySelector('.navbar__page-nav');
const LI = document.querySelectorAll('.navbar__page-nav_1');

for (let i = 0; i < LI.length; i++) {
    LI[i].addEventListener('click', (event) => {
        NAV.querySelector('li.selected').classList.remove('selected');    
        LI[i].classList.add('selected');
    });
}


