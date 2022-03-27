const hamburgerBTN = document.querySelector('.fas.fa-bars');


function toggleActive(){
    const menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('active')

}

hamburgerBTN.addEventListener('click', toggleActive)


const crossBTN = document.querySelector('.close');


crossBTN.addEventListener('click', toggleActive);

