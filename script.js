
const choices = ['rock','paper','scissors'];
let humanScore = 0;
let computerScore = 0;
function playGame(){
  

  while (humanScore < 5 && computerScore < 5){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
    
    if(humanScore === 5 || computerScore === 5){
      break;
    }
  }
  if (humanScore === 5) {
    document.getElementById('winner').innerText = `You win the game! 🏆 Final score: ${humanScore} - ${computerScore}`;
  } else if (computerScore === 5) {
    document.getElementById('winner').innerText = `You lose the game! 😢 Final score: ${humanScore} - ${computerScore}`;
  } else {
    document.getElementById('winner').innerText = `It's a tie! Final score: ${humanScore} - ${computerScore}`;
  }
  
}
function getComputerChoice(){
  let computerChoice;
  let randomNumber = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomNumber];
  return computerChoice;
}

function getHumanChoice(){
  let humanChoice;

   // Loop until a valid choice is entered
  do{
      humanChoice = prompt("Enter your choice => Rock or Paper or Scissors").toLowerCase();
      
    }while(!choices.includes(humanChoice))  // check if the entered choice is valid
  
  
  return humanChoice;
}

function playRound(humanChoice, computerChoice){
  if (humanChoice === computerChoice){
    document.getElementById('winner').innerText = "No one scores";
    
  }
  
  else if (
    (humanChoice === 'rock' && computerChoice ==='scissors') ||
    (humanChoice ==='scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')){
      
      humanScore++;
      
      document.getElementById('human').innerText = `${humanScore}`;
    }
  else{
    computerScore++;
   
     // Display the computer's choice and the result of the round
    document.getElementById('computer').innerText = `${computerScore}`;
  }

}

playGame();

