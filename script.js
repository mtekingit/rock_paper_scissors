// computer generates random number between 0 - 2 and assign rock, paper and scissors correspondingly
function computerPlay () {

   let number = Math.floor(Math.random()*3);

    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computerSelection;


let scorePlayer = 0;
let scoreComputer = 0;

// the function that compares and declares the winner
function playRound (playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        
        return "both choose same!";
    } else if (playerSelection === "rock") {

        if (computerSelection === "scissors") {
            scorePlayer = scorePlayer+1;
            return "rock beats scissors, you win baby!!";
        } else {
            scoreComputer = scoreComputer+1;
            return "paper beats rock, you loose mate!";
        }

    } else if (playerSelection === "paper") {

        if (computerSelection === "rock") {
            scorePlayer = scorePlayer+1;
            return "paper beats rock, you win baby!!";
        } else {
            scoreComputer = scoreComputer+1;
            return "scissors beat paper, you loose mate!";
        }

    } else if (playerSelection === "scissors") {

        if (computerSelection === "paper") {
            scorePlayer = scorePlayer+1;
            return "scissors beat paper, you win baby!!";
        } else {
            scoreComputer = scoreComputer+1;
            return "rock beats scissors, you loose mate!";
        }
    }
}


// the function that handles to whole game (5 rounds)
function game () {

// trying a while loop for 5 rounds

let x = 1;
while (x<6) {

   // the entry of the player
   let playerEntry = prompt("rock, paper or scissors?");

    // to eliminate case sensitivity
    playerSelection = playerEntry.toLowerCase();

        // if the user enters some other word ask to try again
        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
   
            playerEntry = prompt("you typed some shit! rock, paper or scissors please!");
            playerSelection = playerEntry.toLowerCase();
         }

  

  
    computerSelection = computerPlay();
    // winner of each round
    let str = playRound(playerSelection, computerSelection);
    console.log(playerSelection+", "+computerSelection);
    console.log(str);

    // after the final round the overall score and the winner is declared
    if (x===5) {

        console.log(scorePlayer+" - "+scoreComputer);

            if (scorePlayer>scoreComputer) {
                console.log("PLAYER WON!!")
            } else if (scoreComputer>scorePlayer) {
                console.log("COMPUTER  WON!!")
            } else {
                console.log("EQUAL SCORE!")
            }
    }

    x = x+1;

}
}