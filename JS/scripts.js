// Pig Dice Game

// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Initialize game variables
  var scores, roundScore, activePlayer, gamePlaying;
  
  function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
  
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
  
    document.getElementById('player-0').classList.remove('winner');
    document.getElementById('player-1').classList.remove('winner');
    document.getElementById('player-0').classList.add('active');
    document.getElementById('player-1').classList.remove('active');
  
    document.getElementById('dice-image').src = 'dice-1.png';
  
    document.getElementById('roll').disabled = false;
    document.getElementById('hold').disabled = false;
  }
  
  function nextPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
  
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
  
    document.getElementById('player-0').classList.toggle('active');
    document.getElementById('player-1').classList.toggle('active');
  }
  
  // Roll dice button event listener
  document.getElementById('roll').addEventListener('click', function() {
    if (gamePlaying) {
      // Generate random dice number
      var dice = rollDice();
  
      // Display the dice image
      document.getElementById('dice-image').src = 'dice-' + dice + '.png';
  
      // Update roundScore if the rolled number was not 1
      if (dice !== 1) {
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
      } else {
        // Switch to the next player
        nextPlayer();
      }
    }
  });
  
  // Hold button event listener
  document.getElementById('hold').addEventListener('click', function() {
    if (gamePlaying) {
      // Add roundScore to the active player's score
      scores[activePlayer] += roundScore;
  
      // Update the UI
      document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  
      // Check if the active player has won
      if (scores[activePlayer] >= 100) {
        document.getElementById('player-' + activePlayer).classList.add('winner');
        document.getElementById('player-' + activePlayer).classList.remove('active');
        document.getElementById('player-' + activePlayer).querySelector('h2').textContent = 'Winner!';
        document.getElementById('roll').disabled = true;
        document.getElementById('hold').disabled = true;
        gamePlaying = false;
      } else {
        // Switch to the next player
        nextPlayer();
      }
    }
  });
  
  // New game button event listener
  document.getElementById('new-game').addEventListener('click', init);
  

  init();
  