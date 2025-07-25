let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompchoice = () => {
    const options = ["rock","paper","scissor"];
    const RandomIdx = Math.floor(Math.random()*3);

    return options[RandomIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again ";
    msg.style.backgroundColor = "#081b31";
    
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}           

const playGame = (userChoice) => {
    const compChoice = getCompchoice();

    if (userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice ==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else if (userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})