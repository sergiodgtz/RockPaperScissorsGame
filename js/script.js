function GetComputerChoice() {
    
   let option =  Math.floor(Math.random() * 3)

   switch(option){

    case 0: 
        return "rock";
    
    case 1:
        return "paper";
    
    case 2:
        return "scissors";

    default:
        return "";

   }


}



function round(cpuChoice, playerChoice) 
{

    playerChoice = playerChoice.toLowerCase();

    if(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors")
        return "You Lose! Invalid input!"

    if (cpuChoice == playerChoice) 
    {
        return "It is a draw! You both chose " + playerChoice;

    }
    else if(cpuChoice == "rock" && playerChoice == "scissors")
    {
        return "You Lose! Rock beats Scissors";
    }
    else if(cpuChoice == "scissors" && playerChoice == "paper")
    {
        return "You Lose! Scissors beats Paper";
    }
    else if(cpuChoice == "paper" && playerChoice == "rock")
    {
        return "You Lose! Paper beats Rock"
    }
    else
    {
        return "You win! " + playerChoice + " beats " + cpuChoice;
    }


}

function game(){

    let playerScore = 0;
    let cpuScore = 0;
    let playerSelection;
    let cpuChoice;
    let result;


    while(playerScore < 3 || cpuScore < 3)
    {

        if(playerScore >=3){
            console.log("You won!");
            break;
        }
        else if(cpuScore >= 3)
        {
            console.log("You lost!");
            break;
        }
        
        console.log("Pick an option!\n");

        playerSelection = prompt()
        cpuChoice = GetComputerChoice()

        result = round(cpuChoice, playerSelection)
        console.log(result)

        if(result.includes("You Win"))
            playerScore++;
        else if(result.includes("You Lose"))
            cpuScore++
    }

}

game()

