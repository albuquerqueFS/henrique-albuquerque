const header = document.getElementById('header');
const headerUlLi = document.querySelector('#header ul li');
const headerUlList = document.querySelectorAll('#header ul li');
const logo = document.getElementById('logo');

const firstScreen = window.innerHeight;
const secondScreen = window.innerHeight + document.getElementById('sobre-flex').height;

const contato = document.getElementById('contato');

window.onscroll = () => {

    if (window.pageYOffset > 160) {
        header.style.background = 'rgba(0, 0, 0, 0.20)';
        header.style.height = '5rem';

        logo.style.fontSize = '1.5rem';
        logo.style.padding = '1rem 1rem';

        headerUlLi.style.fontSize = '1rem';
    } else {
        header.style.background = 'none';
        header.style.height = '7rem';

        logo.style.fontSize = '2rem';
        logo.style.padding = '1rem 1rem';

        headerUlLi.style.fontSize = '1.2rem';
    }

    if (window.pageYOffset > (firstScreen - 50) && window.pageYOffset < (firstScreen + firstScreen)) {
        headerUlList[0].classList.remove('aba-selected');
        headerUlList[1].className = 'aba-selected';
        headerUlList[2].classList.remove('aba-selected');

        contato.style.backgroundColor = 'none';
    } else if (window.pageYOffset > (firstScreen + firstScreen)) {
        headerUlList[1].classList.remove('aba-selected');
        headerUlList[0].classList.remove('aba-selected');
        headerUlList[2].className = 'aba-selected';
        contato.style.backgroundColor = 'white';

    } else {
        headerUlList[1].classList.remove('aba-selected');
        headerUlList[0].className = 'aba-selected';
        headerUlList[2].classList.remove('aba-selected');

        contato.style.backgroundColor = 'none';
    }



}