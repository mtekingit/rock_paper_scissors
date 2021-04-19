// variables

let playerSelection;
let computerSelection;
let result;
let scorePlayer = 0;
let scoreComputer = 0;
let decision;
let scoreBoard = document.querySelector('#scoreBoard');
let buttonsNodeList = document.querySelectorAll('.buttons');
let refreshButton = document.querySelector('#refreshButton');


// game starts with loading of the page

window.addEventListener('load', game);


// computer generates random number between 0 - 2 and assign rock, paper and scissors correspondingly

function computerPlay () {

   let number = Math.floor(Math.random()*3);

    if (number === 0) {
        computerSelection = "r";
    } else if (number === 1) {
        computerSelection = "p";
    } else {
        computerSelection = "s";
    }

    return computerSelection;
}




// the function that does the comparison and declares the winner each round

function playRound () {

 //   console.log('playround calisti');

    playerSelection = this.getAttribute('id');

 //   console.log(playerSelection);

    computerPlay();


    if (playerSelection === computerSelection) {
        
        alert ('That is a tie! Try  again.');
        return;
        
    } else if (playerSelection === "r") {

        if (computerSelection === "s") {
            scorePlayer = scorePlayer+1;
            result = "rock beats scissors, you won this round!!";
            writer();
        } else {
            scoreComputer = scoreComputer+1;
            result = "paper beats rock, computer won this round!";
            writer();
        }

    } else if (playerSelection === "p") {

        if (computerSelection === "r") {
            scorePlayer = scorePlayer+1;
            result = "paper beats rock, you won this round!!";
            writer();
        } else {
            scoreComputer = scoreComputer+1;
            result = "scissors beat paper, computer won this round!";
            writer();
        }

    } else if (playerSelection === "s") {

        if (computerSelection === "p") {
            scorePlayer = scorePlayer+1;
            result = "scissors beat paper, you won this round!!";
            writer();
        } else {
            scoreComputer = scoreComputer+1;
            result = "rock beats scissors, computer won this round!";
            writer();
        }
    }

    if (scorePlayer === 5 || scoreComputer === 5) {
        finalScore();
        return decision;
    } else {
        return result;
    }

}




// adding event listener to game buttons which execute playRound function of the game

function game () {

//    console.log('yazdirmak');

    for (let i=0; i<buttonsNodeList.length; i++) {

        buttonsNodeList[i].addEventListener('click', playRound);

    }

}


// the function that finalize the game and declares the overall winner

function finalScore() {

    scoreBoard.textContent = '';

    const gameOver = document.createElement('h1');
    const winner = document.createElement('p');
    const paragraph3 = document.createElement('p');

    if (scorePlayer === 5) {
        decision = 'USER';
    } else {
        decision = 'COMPUTER';
    }

    gameOver.textContent = 'GAME OVER!!';
    winner.textContent = 'THE WINNER IS '+ decision + '. CONGRATULATIONS!';
    paragraph3.textContent = 'COMPUTER ' + scoreComputer + ' - ' + scorePlayer + ' USER';

    scoreBoard.appendChild(gameOver);
    scoreBoard.appendChild(winner);
    scoreBoard.appendChild(paragraph3);

    for (let i=0; i<buttonsNodeList.length; i++) {
        buttonsNodeList[i].classList.toggle('hidden');
    }
	
	const gameButtonsDiv = document.querySelector('#gameButtonsDiv');
	gameButtonsDiv.classList.add('hidden');
    refreshButton.classList.remove('hidden');
    refreshButton.addEventListener('click', refresh);

    return decision;

}


// the function that declares the score each round

function writer() {

    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');

    paragraph1.textContent = result;
    paragraph2.textContent = 'COMPUTER ' + scoreComputer + ' - ' + scorePlayer + ' USER';

    scoreBoard.appendChild(paragraph1);
    scoreBoard.appendChild(paragraph2);

}


// need to relaod the page  to restart the game

function refresh() {

    location.reload();

}

 