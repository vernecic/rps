const choices = ["rock", "paper", "scissors"];
/*
let getComputerChoice = choices[Math.floor(Math.random() * choices.length)]; // choices[od indexa, math.floor zaokruzuje na najblizi cijeli broj, * choices.length jer ih je 3]
console.log(getComputerChoice);
*/

const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * choices.length);
  let compChoice = choices[index];

  return compChoice;
};

const getHumanChoice = function () {
  let input = prompt("Please choose between rock, paper and scissors!");
  if (input !== "rock" && input !== "scissors" && input !== "paper") {
    prompt("Please choose between rock, paper and scissors!");
  }
  return input;
};

// function playRound(humanChoice, computerChoice) {}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }
  /*  playRound(humanChoice, computerChoice);
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer's score: ${computerScore}`); */

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  console.log("\nFinal scores:");
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer's score: ${computerScore}`);
}
