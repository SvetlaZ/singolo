import './style.scss';

const NAV = document.querySelector('.navbar__page-nav');
const LI = document.querySelectorAll('.navbar__page-nav_1');

for (let i = 0; i < LI.length; i++) {
    LI[i].addEventListener('click', () => {
        NAV.querySelector('li.selected').classList.remove('selected');    
        LI[i].classList.add('selected');
    });
}

const PORTFNAV = document.querySelector('.list');
const PORTFLI = document.querySelectorAll('.mark');

for (let i = 0; i < PORTFLI.length; i++) {
    PORTFLI[i].addEventListener('click', () => {
        PORTFNAV.querySelector('.active').classList.remove('active');    
        PORTFLI[i].classList.add('active');

        const pictures =Array.from(document.querySelectorAll('.picture')).sort(function(){
            return Math.random() - 0.5;
          });
          
          const album = document.querySelector('.album');

          for (let j = 0; j < pictures.length; j++) {
            album.append(pictures[j]);
          }
    });
}

const PICBORDER = document.querySelectorAll('.picture');
for (let i = 0; i < PICBORDER.length; i++) {
    PICBORDER[i].addEventListener('click', () => {
        if (PICBORDER[i].classList.contains('border')) {
            PICBORDER[i].classList.remove('border');
        } else {
            const border = document.querySelector('.border');
            
            if (border) {
                border.classList.remove('border');
            }

            PICBORDER[i].classList.add('border'); 
        }
    })
}

const FORM = document.querySelector('.form-submit');
FORM.addEventListener('submit', () => {
    event.preventDefault();

    document.querySelector('.background-black').classList.remove('hidden');
    
    let MESSAGE = 'Письмо отправлено';
        if (document.querySelector('.contact-subject').value === '') {
            MESSAGE += '<br>' + 'Без темы';
        } else {
            MESSAGE += '<br/>' + 'Тема:' + document.querySelector('.contact-subject').value;
        }

        if (document.querySelector('.contact-description').value === '') {
            MESSAGE += '<br/>' + 'Без описания';
        } else {
            MESSAGE += '<br/>' + 'Описание:' + document.querySelector('.contact-description').value;
        }
        
        MESSAGE+= '<br/><button type="button" class="background-black-btn">OK</button>';
        document.querySelector('.background-black-window').innerHTML = MESSAGE;

    document.querySelector('.background-black-btn').addEventListener('click', () => {
        document.querySelector('.background-black').classList.add('hidden');
        FORM.reset();
    });
})
