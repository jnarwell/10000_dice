let totalScore = 0;

function rollDice(){
    let roll = [];
    for (let i=0; i<6; i++){
        roll.push(Math.floor(Math.random()*6)+1);
    }
    getScore(roll)
}

function getScore(diceRoll){
    let score = 0;
    let counts = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0};
    let straight = 0;

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
    totalScore+=score;
    console.log(totalScore);
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}