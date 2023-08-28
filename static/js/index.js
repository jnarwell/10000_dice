console.log('js-function');
class diceGame{
    constructor(){
        this.score = 0;
        this.roll = [];
    }
    roll(){
        for (let i = 0; i<6;i++){
            //this.roll.push(Math.random()*(6-1)+1)
            this.score+=(Math.random()*(6-1)+1);
        }
    }
}
loadPage();

function loadPage(){
    console.log('loading page...')
    let game = new diceGame();
    console.log(game);

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