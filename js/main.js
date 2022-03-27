/*

A["selezionare il bottone nell'interfaccia (l'elemento con tre linee orizzontali)"] --> B[Creare una funzione]
B --> C["Nella funzione: Selezionare l'elemento 'hamburgher-menu' "]
C --> D["Nella funzione: applicare la classe 'active' all'elemento 'hamburgher-menu' "]
D --> E["associare la funzione all'evento 'click' "]

*/



/* seleziono il bottone hamburger menu*/

const hamburgerBTN = document.querySelector('.header-right > a');


/* seleziono il bottone X */

const crossBTN = document.querySelector('.close');

/* funzione che seleziona elemento '.hamburger-menu' e gli applica classe 'active' se non presente e la rimuove se presente (toggle) */

function toggleActive(){
    const menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('active')
}

/* associo la funzione all'evento 'click' ad entrambi gli elementi */

hamburgerBTN.addEventListener('click', toggleActive)

crossBTN.addEventListener('click', toggleActive);

