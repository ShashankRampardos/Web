//CrickBookGame

//Two Players - round robin
//add if turn score is 2, 4, 6
//whoever scare most after 5 turn
console.log(`CrickBookGame:-
                -Enter scores for player one and two(only 2,4,6 are added in
                 score).
                -use function playerOne() & playerTwo() to input score.`);
function crkbook(){
    let total=0;
    let turns=0;
    return function(score){
        turns++;
        if(turns>5)
        return `5 turns are over:
                Final score is ${total}`;
        else{
              if(isNAN(score)){
                if(score==2||score==4||score==6)  
                   total=total+score;
        return`Turn-${turns} Your current score is ${total}`;
                              }
             else
                console.log(`Please enter a valid number`);
            }
                          };
                    }

const playerOne=crkbook();
const playerTwo=crkbook();
