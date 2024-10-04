const items = ['rock', 'paper', 'scissors'];
let counter = 0;

function game() {
  let player1 = Math.floor(Math.random() * 3);
  let player2 = Math.floor(Math.random() * 3);
  
  let player1Choice = items[player1];
  let player2Choice = items[player2];
  
  document.getElementById('p1').innerText = player1Choice;
  document.getElementById('p2').innerText = player2Choice;
  
  checkWinner(player1Choice, player2Choice);
}

function playerWins(name) {
  if (counter <= 5) {
    counter++;
    if (counter === 5) {
      let result = name + ' wins! 🚩';
      counter = 0;
      displayWinner(result);
    } else {
      game(); // Continue playing until the counter reaches 5
    }
  }
}

function checkWinner(player1Choice, player2Choice) {
  let tie;
  
  if (player1Choice === player2Choice) {
    tie = "It's a tie! 🎀";
    document.getElementById('winner').innerText = tie;
    return; // Stop further execution since it's a tie
  }
  
  if (
    (player1Choice === 'rock' && player2Choice === 'scissors') ||
    (player1Choice === 'scissors' && player2Choice === 'paper') ||
    (player1Choice === 'paper' && player2Choice === 'rock')
  ) {
    playerWins('Player 1');
  } else {
    playerWins('Player 2');
  }
}

function displayWinner(result) {
  document.getElementById('winner').innerText = result;
}

game();
