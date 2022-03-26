
let humanRecord = 0;
let computerRecord = 0;
let counter = 0;

function playRound(playerSelection, computerSelection){

    const draw = "Draw!";
    //draw situation
    if(playerSelection == "rock" && computerSelection == "rock")
            return draw;
        else
            if(playerSelection == "paper" && computerSelection == "paper")
                    return draw;
                else
                    if(playerSelection == "scissors" && computerSelection == "scissors")
                            return draw;  
                            
    //winning situation for human
    if(( playerSelection == "rock" && computerSelection == "scissors" ) ||
       ( playerSelection == "scissors" && computerSelection == "paper") || 
       ( playerSelection == "paper" && computerSelection == "rock" ) ){
        humanRecord++;
        return "HUMAN WIN!" + playerSelection + " beats " + computerSelection;
    }
        

    //winning situation for computer    
    if(( computerSelection == "rock" && playerSelection == "scissors" ) ||
       ( computerSelection == "scissors" && playerSelection == "paper") ||
       ( computerSelection == "paper" && playerSelection == "rock" ) ){
        computerRecord++;
        return "COMPUTER WIN!" + computerSelection + " beats " + playerSelection;    
    }
}

/*function that randomise choices for computer*/ 
function computerPlay(){
    var items = ['rock', 'paper', 'scissors'];
    var item = items[Math.floor(Math.random() * items.length)];
   
    return item;
} 


function isGameOver() {
    return humanRecord === 5 || computerRecord === 5
}


const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');
const resultBtn = document.getElementById('result');
const showresultMsg = document.getElementById('showresultMsg');
const whoWon = document.getElementById('who_won_text')

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
resetBtn.addEventListener('click',resetGame);
/*resultBtn.addEventListener('click',showResult);*/


function showResult(){
    document.getElementById('showresultMsg').innerHTML=('HumanRecord is: ' + humanRecord + '<br><br>Computer record is: ' + computerRecord);
}



function decideWhoWon(humanRecord,computerRecord)
{
    if(humanRecord === 5 && computerRecord < 5){
        document.getElementById('game_over').innerHTML=("game over!<br><br> restart if you would like to play another game!");
        document.getElementById('who_won_text').innerHTML=("Human Won");
    }
    else{
        document.getElementById('game_over').innerHTML=("game over! restart if you would like to play another game!");
        document.getElementById('who_won_text').innerHTML=("Computer Won");
    }
    
    return 1;
}

function handleClick(playerSelection){

    if(isGameOver() && counter == 1)
         document.getElementById('game_over').innerHTML=("game over! restart if you would like to play another game!");
        else
            if(counter == 0){
                const computerSelection = computerPlay();
                console.log(playRound(playerSelection, computerSelection));
                if(humanRecord === 5 || computerRecord === 5)
                    counter = decideWhoWon(humanRecord,computerRecord);
            }
            showResult();
}


function resetGame(){

    counter = 0;
    humanRecord = 0;
    computerRecord = 0;
    document.getElementById('who_won_text').innerHTML=("");
    document.getElementById('game_over').innerHTML=("");
    showResult()
}










