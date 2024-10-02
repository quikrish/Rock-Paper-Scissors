// array of items
const items = ['rock','paper','scissors']
// Create a new element
player1 = Math.floor(Math.random() *2 + 1);
player2 = Math.floor(Math.random() *2 + 1);
const player1Choice = items[player1];
const player2Choice = items[player2];

//display the player1 and player2 choices on the html page

document.getElementById('p1').innerText = player1Choice;
document.getElementById('p2').innerText = player2Choice;
    
//Determine the winner

const winner = (player1Choice === player2Choice) 
   ? 'It\'s a tie!🎀' 
    : ((player1Choice === 'rock' && player2Choice ==='scissors') || 
      (player1Choice ==='scissors' && player2Choice === 'paper') || 
      (player1Choice === 'paper' && player2Choice === 'rock')) 
       ? 'Player 1 wins!🚩' 
        : 'Player 2 wins!🚩';
        
// Display the winner
document.getElementById('winner').innerText = winner;