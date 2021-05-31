const playerGrid = document.getElementById('playerGrid')
const computerGrid = document.getElementById('computerGrid')
const playerScoreDisplay = document.getElementById('playerScore')
const computerScoreDisplay = document.getElementById('computerScore')
const buttons = document.getElementsByClassName('btn')
const restartBtn = document.getElementById('restartBtn')
const resultDisplay = document.getElementById('result')
const totalR = document.getElementById('totalRound')
const endGameDisplay = document.getElementById('endGame')
const roundDisplay = document.getElementById('roundDisplay')
let playerChoice
let computerChoice
let computerChoices = ['paper', 'rock', 'scissor']
let playerScore = 1
let computerScore = 1
let totalRound = 9

gameStart()

function gameStart(){
    for( let i = 0, n = buttons.length; i < n; i++){
        buttons[i].addEventListener('click', (e) => {
            playerGrid.classList.remove('playerRock', 'playerPaper', 'playerScissor')
            computerGrid.classList.remove('computerRock', 'computerPaper', 'computerScissor')
            playerChoice = e.target.id
            roundDisplay.textContent = totalRound--
            loadingPlayer()
            loadingComputer()
            setTimeout(function() {
                playerGrid.innerHTML = ''
                if(playerChoice === 'rock'){
                    playerGrid.classList.add('playerRock')
                } else if(playerChoice === 'paper'){
                    playerGrid.classList.add('playerPaper')
                } else {
                    playerGrid.classList.add('playerScissor')
            }}, 500)
            randomComputerChoice()
            getResult()
            if(totalRound === 0){
                setTimeout(function() {
                    endGame()
                }, 2100)
            }
        })
    }
}

restartBtn.addEventListener('click', () => {
    playerGrid.classList.remove('playerRock', 'playerPaper', 'playerScissor')
    computerGrid.classList.remove('computerRock', 'computerPaper', 'computerScissor')
    resultDisplay.textContent = ''
    computerScoreDisplay.textContent = '0'
    playerScoreDisplay.textContent = '0'
    roundDisplay.textContent = 10
    endGameDisplay.innerHTML = ''
    playerScore = 1
    computerScore = 1
    totalRound = 9
})

function loadingPlayer() {
    playerGrid.innerHTML += `
        <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    `
}

function loadingComputer() {
    computerGrid.innerHTML += `
        <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    `
}

function randomComputerChoice() {
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    if(computerChoice === 'paper'){
        setTimeout(function() {
            computerGrid.innerHTML = ''
            computerGrid.classList.add('computerPaper')
        }, 500)  
    } else if(computerChoice === 'rock'){
        setTimeout(function() {
            computerGrid.innerHTML = ''
            computerGrid.classList.add('computerRock')
        }, 500)  
    } else {
        setTimeout(function() {
            computerGrid.innerHTML = ''
            computerGrid.classList.add('computerScissor')
        }, 500)  
    }
}

function getResult(){
    resultDisplay.textContent = ''
    switch(playerChoice + computerChoice){
        case 'scissorpaper':
        case 'rockscissor':
        case 'paperrock':
            setTimeout(function() {
                resultDisplay.textContent = "PLAYER WIN"
                playerScoreDisplay.textContent = playerScore++
            }, 550)
            break
        case 'scissorrock':
        case 'paperscissor':
        case 'rockpaper':
            setTimeout(function() {
                resultDisplay.textContent = "COMPUTER WIN"
                computerScoreDisplay.textContent = computerScore ++
            }, 550)
            break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            setTimeout(function() {resultDisplay.textContent = "DRAW"}, 550)
    }
}


function endGame() {
    if(playerScore > computerScore){
        endGameDisplay.innerHTML += `
        <div id="endGamePanel">
            <p id="endGameResult">player win 😁</p>
        </div>
    `
    } else if(playerScore < computerScore){
        endGameDisplay.innerHTML += `
        <div id="endGamePanel">
            <p id="endGameResult">computer win 😭</p>
        </div>
    `
    } else {
        endGameDisplay.innerHTML += `
        <div id="endGamePanel">
            <p id="endGameResult">it's a draw 😶</p>
        </div>
    `
    }
}








// Another method to add EventListener on buttons
// But need to use document.querySelectorAll

// const buttons = document.querySelectorAll('button')

// buttons.forEach(button => button.addEventListener('click', (e) => {
//     playerGrid.classList.remove('playerRock', 'playerPaper', 'playerScissor')
//     computerGrid.classList.remove('computerRock', 'computerPaper', 'computerScissor')
//     playerChoice = e.target.id

//     loadingPlayer()
//     loadingComputer()
    
//     setTimeout(function() {
//         playerGrid.innerHTML = ''
//         if(playerChoice === 'rock'){
//             playerGrid.classList.add('playerRock')
//         } else if(playerChoice === 'paper'){
//             playerGrid.classList.add('playerPaper')
//         } else {
//             playerGrid.classList.add('playerScissor')
//     }}, 500)

//     randomComputerChoice()
//     getResult()
// }))