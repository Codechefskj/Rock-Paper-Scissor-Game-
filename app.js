let yourscore = 0; 
let computerscore = 0;
const choices = document.querySelectorAll(".img_div");
const your_score = document.querySelector("#yorscore");
const comp_score = document.querySelector("#compscore");
const resetbutton = document.querySelector(".button")

const computerchoice = () => {
    const option = ["rock", "paper", "scissors"]; 
    const compchoice = Math.floor(Math.random() * 3);
    return option[compchoice];
}

const winner = (userwin) => {
    if (userwin) {
        yourscore++;
        your_score.innerText=yourscore;
    } else {
        computerscore++;
        comp_score.innerText=computerscore;
    }
}

const drawgame = () => {
    console.log("Game Is Draw");
}

const playgames = (userchoice) => {
    console.log("userchoice", userchoice);
    let compgenchoice = computerchoice();
    console.log("computer generated choice:", compgenchoice);
    if (userchoice === compgenchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compgenchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compgenchoice === "scissors" ? false : true;
        } else if (userchoice === "scissors") {
            userwin = compgenchoice === "rock" ? false : true;
        }
        winner(userwin); 
    }
}

resetbutton.addEventListener("click", () => {
    yourscore = 0;
    computerscore = 0;
    your_score.innerText = yourscore;
    comp_score.innerText = computerscore;
});

choices.forEach((div) => {
    div.addEventListener("click", () => {
        let userchoice = div.getAttribute("id");
        playgames(userchoice);
    });
});