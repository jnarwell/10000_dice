console.log('js-function');
let totalScore = 0;
let dice = ['static/images/dice-1.svg','static/images/dice-2.svg','static/images/dice-3.svg','static/images/dice-4.svg','static/images/dice-5.svg','static/images/dice-6.svg']
loadPage();

function loadPage(){
    console.log('loading page...')

    const rollButton = document.getElementById('roll-btn');
    rollButton.addEventListener('click', rollDice)

    reset();
}

function reset(){
    totalScore = 0;
    document.getElementById('dice1').src = 'static/images/dice-1.svg';
    document.getElementById('score').innerHTML = 0;
    document.getElementById('total-score').innerHTML = totalScore;

    document.getElementById('roll-btn').innerHTML = 'Roll';
    const rollButton = document.getElementById('roll-btn');
    rollButton.removeEventListener('click', reset);
    rollButton.addEventListener('click', rollDice);

    resetDice();
}

function rollDice(){
    let roll = [];
    for (let i=0; i<6; i++){
        roll.push(Math.floor(Math.random()*6)+1);
    }
    return getScore(roll)
}

function getScore(diceRoll){
    let score = 0;
    let counts = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0};
    let straight = 0;
    shakeDice(diceRoll);
    
    for (let die of diceRoll){
        counts[die]++;
        if (counts[die]==1){straight+=1}
    }
    // if (straight==6){
        //     counts = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0};
        //     score+=1500;
        // }
        for(let i=0; i<2;i++){
            for (let count in counts){
                if (counts[count]>2){
                    if (count == 1){
                    score+=1000;
                }else{
                    score += Object.keys(counts)[count-1]*100;
                }
                counts[count]-=3;
            }
        }
    }
    while(counts[5]>0){
        if (counts[5]<3){
            score+=50;
            counts[5]--;
        }
    }
    while(counts[1]>0){
        if (counts[1]<3){
            score+=100;
            counts[1]--;
        }
    }
    // console.log(diceRoll);
    // console.log(counts);
    // console.log(score);
    //console.log(totalScore);

    totalScore+=score;
    document.getElementById('score').innerHTML = score;
    document.getElementById('total-score').innerHTML = totalScore;
    if (totalScore >= 10000){
        document.getElementById('roll-btn').innerHTML = 'Reset';
        const rollButton = document.getElementById('roll-btn');
        rollButton.addEventListener('click', reset)
    }
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function resetDice(){
    const dieSlots = document.getElementsByClassName('dice');
    for (let slot of dieSlots){
        slot.src=dice[0];
    }
}

function displayDice(diceRoll){
    const dieSlots = document.getElementsByClassName('dice');
    let i=0;
    setTimeout(function(){
        for (let slot of dieSlots){
            console.log(diceRoll[i]);
            slot.src=dice[diceRoll[i]-1];
            i++;
        }
    }, 500*5)
}

function shakeDice(diceRoll){
    const dieSlots = document.getElementsByClassName('dice');
    for(let i=0;i<4;i++){
        setTimeout(function(){
            for (let slot of dieSlots){
                slot.src=dice[Math.round(Math.random()*5)];
            }
        }, 500*i)
    }
    displayDice(diceRoll);
}