const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const p = document.createElement('p');
p.textContent = '';
const winner = document.querySelector('.winner');
const winnerh2 = document.createElement('h2');

const choices = ['rock','paper','scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let computerChoice;
  let randomNumber = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomNumber];
  return computerChoice;
}



function playRound(humanChoice, computerChoice){
  winnerh2.textContent = '';
  winner.appendChild(winnerh2);
  
  if (humanChoice === computerChoice){
    p.textContent = `It\'s a tie! You both picked ${humanChoice}`;
    outcomeDiv.appendChild(p);
    
  }
  
  else if (
    (humanChoice === 'rock' && computerChoice ==='scissors') ||
    (humanChoice ==='scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')){
      
      humanScore++;
      if(humanScore === 5){
        winnerh2.textContent = `Congratulations You win!`
        winner.appendChild(winnerh2);
        humanScore = 0;
        computerScore = 0;
      }
     
      p.textContent = `You win!, ${humanChoice} beats ${computerChoice}`;
      outcomeDiv.appendChild(p);
      console.log(`Your score ${humanScore}`);
    }
  else{
    p.textContent = `You lose!, ${computerChoice} beats ${humanChoice}`;
    outcomeDiv.appendChild(p);
    computerScore++;
    if(computerScore === 5){
      winnerh2.textContent = `Sorry, You lose! Computer beats you ${computerScore} to ${humanScore}`
      winner.appendChild(winnerh2);
      computerScore = 0;
      humanScore = 0;
    }
    console.log(`computer score ${computerScore}`);
     
  }
  

}

rockButton.addEventListener('click',() =>{
  const computerSelection = getComputerChoice();
  const humanSelection = 'rock';
  playRound(humanSelection, computerSelection);
});
paperButton.addEventListener('click',() =>{
  const computerSelection = getComputerChoice();
  const humanSelection = 'paper';
  playRound(humanSelection, computerSelection);
});
scissorsButton.addEventListener('click',() =>{
  const computerSelection = getComputerChoice();
  const humanSelection ='scissors';
  playRound(humanSelection, computerSelection);
});


