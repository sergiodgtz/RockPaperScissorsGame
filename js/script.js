let playerScore = 0;
let cpuScore = 0;
const buttons = Array.from(document.querySelectorAll("button"));

document.querySelector('#score').textContent = playerScore.toString() + " - " + cpuScore.toString();
buttons.forEach(btn => btn.addEventListener('click', game));



function GetComputerChoice() {
    
   let option =  Math.floor(Math.random() * 3)

   switch(option){

    case 0: 
        return "rock";
    
    case 1:
        return "paper";
    
    case 2:
        return "scissors";

   }


}

function playerOption(e){

    if(e.target.id === 'btnRock')
        return 'rock';
    else if(e.target.id === 'btnPaper')
        return 'paper';
    else if(e.target.id === 'btnScissors')
        return 'scissors'
}   

function round(cpuChoice, playerChoice) 
{

    if (cpuChoice == playerChoice) 
    {
        return "It is a draw! You both chose " + playerChoice;

    }
    else if(cpuChoice == "rock" && playerChoice == "scissors")
    {
        return "You lose! Rock beats Scissors";
    }
    else if(cpuChoice == "scissors" && playerChoice == "paper")
    {
        return "You lose! Scissors beats Paper";
    }
    else if(cpuChoice == "paper" && playerChoice == "rock")
    {
        return "You lose! Paper beats Rock"
    }
    else
    {
        return "You win! " + playerChoice + " beats " + cpuChoice;
    }


}


function game(e){

    let playerSelection;
    let cpuChoice;
    let result;

    playerSelection = playerOption(e);
    // playerSelection = prompt()
    cpuChoice = GetComputerChoice();

    result = round(cpuChoice, playerSelection);
    document.querySelector('#result').textContent = result;

    if(result.includes("You win!"))
        playerScore++;
    else if(result.includes("You lose"))
        cpuScore++;

    document.querySelector('#score').textContent = playerScore.toString() + ' - ' + cpuScore.toString();

    if(playerScore >=5)
    {
        
        document.querySelector('#score').textContent = "You won!";
        document.querySelector('#result').textContent = "Click on any button to play again!"
        playerScore = 0;
        cpuScore = 0;

    }
    else if(cpuScore >= 5)
    {
        document.querySelector('#score').textContent = "You lost!";
        document.querySelector('#result').textContent = "Click on any button to play again!"
        playerScore = 0;
        cpuScore = 0;
    }

}


