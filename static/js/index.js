console.log('js-function');
loadPage();

function loadPage(){
    console.log('loading page...')

    const navLinks = document.getElementsByClassName('nav-link');
    for (let link of navLinks){
        link.addEventListener('click', transitionPage);
    }

    const rollButton = document.querySelector('#roll-btn');
    rollButton.addEventListener('roll', addScore)

    document.getElementById('roll-result').innerHTML = game.score;
}

function transitionPage(event){
    //will transition from primary elements to secondary
    const primaryPage = document.getElementsByClassName('is-visible');
    for (let element of primaryPage){
        element.classList.replace('is-visible', 'is-invisible');
    }
    
    let idSecondaryPage = event.target.name;
    const secondaryPage = document.getElementById(idSecondaryPage);
    secondaryPage.classList.replace('is-invisible', 'is-visible')
}

function addScore(){
    //game.score+=1;
    console.log('hello');
}