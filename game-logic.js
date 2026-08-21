let displayHumanWins = document.getElementById("humnWinRounds")
let displayComputerWins = document.getElementById("compWinRounds")

let displayRoundResult= document.getElementById("roundResult")
let displayGameResult= document.getElementById("gameResult")

let displayHumanChoice = document.getElementById('HumanChoice')
let displayComputerChoice = document.getElementById('ComputerChoice')

let triggerButtonsAppear = document.getElementById('trigger-button')
let buttons = document.getElementById('buttons')
let buttonChoice = document.querySelectorAll('.choice')


let humanScore = 0
let computerScore = 0
let currentRound = 0

let humanChoice = ''
let computerChoice = 0


buttonChoice.forEach((button) => {
  console.log("hello")
  button.addEventListener('click', function (e) {
    e.preventDefault()
    console.log("hello")

    computerChoice = getComputerChoice()
    humanChoice = button.textContent

    playRound(computerChoice, humanChoice)

    if (currentRound == 0) {
      displayHumanChoice.innerText = ''
      displayComputerChoice.innerText = ''
    } else {
      displayHumanChoice.innerText = "Your Choice is : " + humanChoice
      displayComputerChoice.innerText = "Computer Choice is : " + computerChoice
    }
    buttons.style.display = 'none'
    console.log(currentRound)
  })
})



function playRound(com, hum) {
  if(com === hum){
      displayRoundResult.innerText = "Tied!"
      currentRound += 1
    }else if(hum === "paper" && com === "rock"){
      displayRoundResult.innerText = "You Win!, rock lost to paper!"
      humanScore += 1
      currentRound += 1
    }else if(hum === "paper" && com === "scissor"){
      displayRoundResult.innerText = "You Lose, paper lost to scissor !"
      computerScore += 1
      currentRound += 1
    }else if(hum === "scissor" && com === "rock"){
      displayRoundResult.innerText = "You Lose, scissor lost to rock !"
      computerScore += 1
      currentRound += 1
    }else if(hum === "scissor" && com === "paper"){
      displayRoundResult.innerText = "You Win, paper lost to scissor!"
      humanScore += 1
      currentRound += 1
    }else if(hum === "rock" && com === "paper"){
      displayRoundResult.innerText = "You lose, rock lost to paper !"
      computerScore += 1
      currentRound += 1
    }else if(hum === "rock" && com === "scissor"){
      displayRoundResult.innerText = "You Win, scissor lost to rock !"
      humanScore += 1
      currentRound += 1
    }
  displayComputerWins.textContent = 'Total Computer round win :' + computerScore
  displayHumanWins.textContent = 'Total Human round win :' + humanScore
  if (currentRound >= 5) {
    if (humanScore > computerScore) {
      displayGameResult.textContent = "YOU WIN THE GAME !!!"
    } else if (humanScore < computerScore) {
      displayGameResult.textContent = "you lost."
    } else {
      displayGameResult.textContent = "unfortunately it's tied"
    }
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  if(choice === 1 ){
    choice = "scissor"
  }else if(choice === 2){
    choice = "rock"
  }else if(choice === 0){
    choice = "paper"
  }
  return choice
}

triggerButtonsAppear.addEventListener('click', function (e) {
  e.preventDefault()
  buttons.style.display = 'block'
  displayHumanChoice.innerText = ''
  displayComputerChoice.innerText = ''
  displayRoundResult.innerText = ""
  displayGameResult.textContent = ""
  if (currentRound >= 5) {
    humanScore = 0
    computerScore = 0
    currentRound = 0
  }

})
