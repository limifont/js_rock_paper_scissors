var rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

function playGame(sign, arr) {
  var random = arr.sample();
  var game = new Game(sign, random);
  game.printChoices();
  game.choiceComparison();
}

var Game = function(playerChoice, computerChoice) {
  this.playerChoice = playerChoice;
  this.computerChoice = computerChoice;
}

Array.prototype.sample = function() {
    return this[Math.floor(Math.random() * this.length)];
};

Game.prototype.printChoices = function() {
  var player = document.getElementById('player_choice');
  var computer = document.getElementById('computer_choice');
  player.innerHTML = 'Your choice: ' + this.playerChoice;
  computer.innerHTML = 'Computer choice: ' + this.computerChoice;
}

Game.prototype.choiceComparison = function() {
  switch(this.playerChoice) {
    case this.computerChoice:
      winner.innerHTML = 'It\'s a tie!';
      break;
    case 'Rock':
      if (this.computerChoice === 'Paper') {
        winner.innerHTML = 'You lose!';
      } else {
        winner.innerHTML = 'You win!';
      }
      break;
    case 'Paper':
      if (this.computerChoice === 'Scissors') {
        winner.innerHTML = 'You lose!';
      } else {
        winner.innerHTML = 'You win!';
      }
      break;
    case 'Scissors':
      if (this.computerChoice === 'Rock') {
        winner.innerHTML = 'You lose!';
      } else {
        winner.innerHTML = 'You win!'
      }
    default:
      winner.innerHTML = 'Make a choice!';
  }
}




