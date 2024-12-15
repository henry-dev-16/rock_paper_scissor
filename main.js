let score = 0;
const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');
const rulesContainer = document.querySelector('.rules_container')
const rules = document.getElementById('rules');
const rulesClose = document.getElementById('rules_close')
const opacity = document.querySelector('.opacity')
const choosesContainer = document.querySelector('.chooses-container')
const chooseContainer = document.querySelector('.choose-container')
const chooses = document.querySelector('.chooses')
const triangleImg = document.getElementById('triangle_img')
const userChoiceDiv  = document.getElementById('user-choice')
const chooseComputer = document.getElementById('computer-choice')
const resultDiv = document.querySelector('.result_div')
const resultSpan = document.querySelector('.result_span')
const playButton = document.querySelector('.play_button')
const scoreDiv = document.getElementById('score-point')


//rules functions

function display_rules (){
    rulesContainer.classList.toggle('d_n')
    opacity.classList.toggle('d_n')
}



//game function



function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    chooseComputer.classList.remove('computer-choice-animation')
    switch (choices[randomNumber]) {
        case "p":
            chooseComputer.classList.remove('rock')
            chooseComputer.classList.remove('scissor')
            chooseComputer.classList.add('paper')
            break
        case "s":
            chooseComputer.classList.remove('rock')
            chooseComputer.classList.remove('paper')
            chooseComputer.classList.add('scissor')
            break
        case "r":
            chooseComputer.classList.remove('scissor')
            chooseComputer.classList.remove('paper')
            chooseComputer.classList.add('rock')
            break
    }
    resultDiv.classList.remove('d_n')
    return choices[randomNumber]
}
function win (){
    resultSpan.innerHTML = "You Win"
    score ++
    scoreDiv.innerHTML = score
}
function lose (){
    resultSpan.innerHTML = "You Lose"
    scoreDiv.innerHTML = score

}
function draw (){
    resultSpan.innerHTML = "Draw"
    scoreDiv.innerHTML = score

}



function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice)
            break
    }

}

function chooses_select (choice){
    console.log('choosesssss: ', choice)
    chooseContainer.classList.remove('d_n')
    chooses.classList.add('d_n')
    triangleImg.classList.add('d_n')
    switch (choice) {
        case "p":
            userChoiceDiv.classList.remove('rock')
            userChoiceDiv.classList.remove('scissor')
            userChoiceDiv.classList.add('paper')
            break
        case "s":
            userChoiceDiv.classList.remove('rock')
            userChoiceDiv.classList.remove('paper')
            userChoiceDiv.classList.add('scissor')
            break
        case "r":
            userChoiceDiv.classList.remove('scissor')
            userChoiceDiv.classList.remove('paper')
            userChoiceDiv.classList.add('rock')
            break
    }
    setTimeout(() => {
        game(choice)
    }, 3000);
   
    
}
// re play function 

function play_again(){
    chooseContainer.classList.add('d_n')
    chooses.classList.remove('d_n')
    triangleImg.classList.remove('d_n')
    chooseComputer.classList.add('computer-choice-animation')
    resultDiv.classList.add('d_n')


}


//listener functions

function main(){
    rules.addEventListener('click', () => display_rules())
    rulesClose.addEventListener('click', () => display_rules())
    rock.addEventListener('click', () => chooses_select("r"))
    scissor.addEventListener('click', () => chooses_select("s"))
    paper.addEventListener('click', () => chooses_select("p"))
    playButton.addEventListener('click', () => play_again())
}
main();


// let userScore = 0;
// let computerScore = 0;
// const userScore_span = document.getElementById("user-score");
// const computerScore_span = document.getElementById("computer-score");
// const scoreBoard_div = document.querySelector('.score-board');
// const result_div = document.querySelector(".result > p");
// const rock_div = document.getElementById('r');
// const paper_div = document.getElementById('p');
// const scissors_div = document.getElementById("s");




// function conver2Word(letter){
//     if (letter == 'p') return "Paper";
//     if (letter == 'r') return "Rock";
//     return 'Scissor'
// }

// function win(user,computer){
//     const smallUser = "user".fontsize(3).sup();
//     const smallcomp = "comp".fontsize(3).sup();
//     const userChoiceDiv = document.getElementById(user)
//     userScore ++;
//     userScore_span.innerHTML = userScore;

//     result_div.innerHTML = `${conver2Word(user)}${smallUser} beats ${conver2Word(computer)}${smallcomp}. You win!`;
//     userChoiceDiv.classList.add('green-glow');
//     setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 300)
// }


// function lose(user, computer) {
//     const smallUser = "user".fontsize(3).sup();
//     const smallcomp = "comp".fontsize(3).sup();
//     const userChoiceDiv = document.getElementById(user)
//     computerScore ++;
//     computerScore_span.innerHTML = computerScore;

//     result_div.innerHTML = `${conver2Word(user)}${smallUser} beats ${conver2Word(computer)}${smallcomp}. You Lose!`
//     userChoiceDiv.classList.add('red-glow');
//     setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 300)


// }
// function draw(user, computer) {
//     const smallUser = "user".fontsize(3).sup();
//     const smallcomp = "comp".fontsize(3).sup();

//     result_div.innerHTML = `${conver2Word(user)}${smallUser} equal ${conver2Word(computer)}${smallcomp}. is a Jamp`
// }




