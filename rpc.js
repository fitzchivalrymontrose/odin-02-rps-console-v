function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

function computerPlay () {
// randomly choose between three options
    let choice = randomNumber(1,3);
    if (choice == 1) {
        choice = 'rock';
    }
    else if (choice == 2) {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    return choice;
}

function playerSelection (choice) {
// prompt player for choice
//    let choice = prompt('Rock, Paper, or Scissors? Choose: ').toLowerCase();

// if input is valid, return choice
// else re-prompt player
    switch (choice) {
        case 'rock': 
            choice = 'rock';
            break;
        case 'paper': 
            choice = 'paper';
            break;
        case 'scissors': 
            choice = 'scissors';
            break;
        default:
            return playerSelection();
    }
    return choice;
}

function compareSelections (player, computer) {
// rock beats scissors
// scissors beats paper
// paper beats rock
    if (player == 'rock') {
        switch (computer) {
            case 'rock':
                tieGame = true;
                whoWon.textContent = 'Tie Game. Rocks all around. No one wins!';
                break
            case 'paper':
                computerScore++;
                whoWon.textContent = 'Paper covers Rock. You lose!';
                break
            case 'scissors':
                playerScore++;
                whoWon.textContent = 'Rock smashes Scissors. You are victorious!';
                break
        }
    }
    else if (player == 'paper') {
        switch (computer) {
            case 'rock':
                playerScore++;
                whoWon.textContent = 'Paper covers Rock. You WIN!';
                break
            case 'paper':
                tieGame = true;
                whoWon.textContent = 'Tie Game. Papers everywhere. No one wins!';
                break
            case 'scissors':
                computerScore++;
                whoWon.textContent = 'Scissors cut Paper. You lose!';
                break
        }
    }
    else if (player == 'scissors') {
        switch (computer) {
            case 'rock':
                computerScore++;
                whoWon.textContent = 'Rock smashes Scissors. You lose!';
                break
            case 'paper':
                playerScore++;
                whoWon.textContent = 'Scissors cut Paper. You are the Victor!';
                break
            case 'scissors':
                tieGame = true
                whoWon.textContent = 'Tie Game. Scissors verus Scissors. No one wins!';
                break
        }
    }
}

// --- PLAY GAME - BEST OF FIVE ROUNDS ---
let playerScore = 0;
let computerScore = 0;
let tieGame = false;
let roundNumber = 0;

function game () {
// playRound 5 times
    playerScore = 0;
    computerScore = 0;
    tieGame = false;
    for (let i=0; i<5; i++) {
        let player = playerSelection();
        let computer = computerPlay();
        playRound(player, computer);
        if (tieGame == true) {
            i--;
            tieGame = false;
        }
    }

    if (playerScore > computerScore) {
        alert(`You win! You won ${playerScore} out of 5 rounds!`);
        console.log(`You win! You won ${playerScore} out of 5 rounds!`);
    }
    else {
        alert(`You lose! You lost ${computerScore} out of 5 rounds!`);
        console.log(`You lose! You lost ${computerScore} out of 5 rounds!`);
    }


}

////// BEGIN NEW GUI GAMEPLAY CODE
const playBtn = document.querySelector('.btn-new-game');
playBtn.addEventListener("click", playGame);

const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const round = document.querySelector('.round-count');

const pSelection = document.querySelector('.player-selection');
const cSelection = document.querySelector('.computer-selection');

const whoWon = document.querySelector('.win-lose');

const clickHandle = function (e) {
    playRound(e, computerPlay());
}
whoWon.textContent = 'FIRST TO FIVE WINS.';
let winner = 'none';

const rockBtn = document.querySelector('.btn-rock');
const paperBtn = document.querySelector('.btn-paper');
const scissorsBtn = document.querySelector('.btn-scissors');

rockBtn.addEventListener('click', () => clickHandle('rock'));
paperBtn.addEventListener('click', () => clickHandle('paper'));   
scissorsBtn.addEventListener('click', () => clickHandle('scissors'));

rockBtn.style.display = 'none';
paperBtn.style.display = 'none';   
scissorsBtn.style.display = 'none';

function playGame () {
    winner = 'none';
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;

    playBtn.style.display = 'none';
    whoWon.textContent = 'LET\'S GO!';
    rockBtn.style.display = '';
    paperBtn.style.display = '';   
    scissorsBtn.style.display = '';

    updateScores();    

    

    
    console.clear();
    console.log(winner);
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundNumber);
    

}

function playRound (playerSelection, computerPlay) {
    compareSelections(playerSelection, computerPlay);
    roundNumber++;
    updateScores();

    if (winner === 'player') {
        whoWon.textContent = 'YOU WIN THE GAME';
        playBtn.style.display = '';
        playBtn.textContent = 'PLAY AGAIN?';
        resetGame();
    }
    else if (winner === 'computer') {
        whoWon.textContent = 'YOU LOSE THE GAME';
        playBtn.style.display = '';
        playBtn.textContent = 'PLAY AGAIN?';
        resetGame();
    }
    
    console.log(winner);
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundNumber);
    
        
}

function updateScores () {
    pScore.textContent = `${playerScore}`;
    cScore.textContent = `${computerScore}`;
    round.textContent = `${roundNumber}`; 
    pSelection.textContent = '?';
    cSelection.textContent = '?';
    if (playerScore >= 5) {
        winner = 'player';
    } 
    else if (computerScore >= 5) {
        winner = 'computer';
    }
}

function resetGame () {
    winner = 'none';
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    rockBtn.style.display = 'none';
    paperBtn.style.display = 'none';   
    scissorsBtn.style.display = 'none';
}

