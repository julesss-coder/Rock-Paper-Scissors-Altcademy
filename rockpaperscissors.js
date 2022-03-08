function playRockPaperScissors() {
  var userScore = 0;
  var botScore = 0;
  var round = 0;

  // Let user choose game mode
  var gameMode = window.prompt('Welcome to Rock Paper Scissors!\nWould you like to play a single round?\n> Type \'single\'.\nWould you like to play in \'best out of three\' mode?\n> Type \'three\'.', 'single').toLowerCase();

  // if there is a typo in user input
  while (gameMode !== 'single' && gameMode !== 'three') {
    // ask for correct input again
    var gameMode = window.prompt('It looks like you made a typo. Please try again:\nWould you like to play a single round?\n> Type \'single\'.\nWould you like to play in \'best out of three\' mode?\n> Type \'three\'.', 'single').toLowerCase();
  } 
  
  // Play a round, or a "best out of three" game
  if (gameMode === 'single') {
    playRound();
  } else if (gameMode === 'three') {
    while (userScore < 2 && botScore < 2) {
      playRound();
    }

    announceWinner();
  }

  function playRound() {
    // get user input
    var userInput = window.prompt('Rock, paper or scissors?', 'Type your answer here').toLowerCase();

    // if there is a typo in user input:
    while (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
      // ask for correct input again
      userInput = window.prompt('It looks like you made a typo. Please try again:\nRock, paper or scissors?', 'Type your answer here').toLowerCase();
    }

    // get bot input
    var choices = ['rock', 'paper', 'scissors'];
    // Create a random integer between 0 and 2
    var number = Math.floor(Math.random() * 3);
    var botInput = choices[number];
    round++;
    console.log(`Round ${round}: You chose ${userInput}, bot chose ${botInput}.`);

    // Keep track of score and announce it after each round
    if (userInput === botInput) {
      console.log(`User score: ${userScore}, bot score: ${botScore}. It\'s a draw!`);
    } else if (userInput === 'rock' && botInput === 'paper') {
      botScore++;
      console.log(`User score: ${userScore}, bot score: ${botScore}. Bot wins round ${round}.`);
    } else if (userInput === 'rock' && botInput === 'scissors') {
      userScore++;
      console.log(`User score: ${userScore}, bot score: ${botScore}. User wins round ${round}.`);
    } else if (userInput === 'paper' && botInput === 'rock') {
      userScore++;
      console.log(`User score: ${userScore}, bot score: ${botScore}. User wins round ${round}.`);
    } else if (userInput === 'paper' && botInput === 'scissors') {
      botScore++;
      console.log(`User score: ${userScore}, bot score: ${botScore}. Bot wins round ${round}.`);
    } else if (userInput === 'scissors' && botInput === 'rock') {
      botScore++;
      console.log(`User score: ${userScore}, bot score: ${botScore}. Bot wins round ${round}.`);
    } else if (userInput === 'scissors' && botInput === 'paper') {
      userScore++;
      console.log(`User score: ${userScore}, bot score: ${botScore}. User wins round ${round}.`);
    }
  }

  function announceWinner() {
    // alert final score and winner
    if (userScore > botScore) {
      alert(`Current score:\nUser vs. bot: ${userScore} : ${botScore}\nUser wins this game!`);
    } else if (userScore < botScore) {
      alert(`Current score:\nUser vs. bot: ${userScore} : ${botScore}\nBot wins this game!`);
    } else if (userScore === botScore) {
      alert(`Current score:\nUser vs. bot: ${userScore} : ${botScore}\nIt's a draw!`);
    }
  }
}

playRockPaperScissors();

// Give avaliable options for playing a new game
while (window.confirm('Would you like to play another game?')) {
  console.log('==============NEW GAME==============');
  playRockPaperScissors();
}

console.log('To start a new game, type playRockPaperScissors() into the console and hit Enter.');