let displayHumanWins = document.getElementById("humnWinRounds")
let displayComputerWins = document.getElementById("compWinRounds")
let displayResult= document.getElementById("result")

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
    playRound(computerChoice, humanChoice)

    computerChoice = getComputerChoice()

    humanChoice = button.textContent
    if (currentRound == 0) {
      displayHumanChoice.innerText = ''
      displayComputerChoice.innerText = ''
    } else {
      displayHumanChoice.innerText = "Your Choice is : " + humanChoice
      displayComputerChoice.innerText = "Computer Choice is : " + computerChoice
    }
    buttons.style.display = 'none'

  })
})


triggerButtonsAppear.addEventListener('click', function (e) {
  e.preventDefault()
  buttons.style.display = 'block'
})

















function playRound(com, hum) {
  if(com === hum){
      displayResult.innerText = "Tied!"
      currentRound += 1
    }else if(hum === "paper" && com === "rock"){
      displayResult.innerText = "You Win!, rock lost to paper!"
      humanScore += 1
      currentRound += 1
    }else if(hum === "paper" && com === "scissor"){
      displayResult.innerText = "You Lose, paper lost to scissor !"
      computerScore += 1
      currentRound += 1
    }else if(hum === "scissor" && com === "rock"){
      displayResult.innerText = "You Lose, scissor lost to rock !"
      computerScore += 1
      currentRound += 1
    }else if(hum === "scissor" && com === "paper"){
      displayResult.innerText = "You Win, paper lost to scissor!"
      humanScore += 1
      currentRound += 1
    }else if(hum === "rock" && com === "paper"){
      displayResult.innerText = "You lose, rock lost to paper !"
      computerScore += 1
      currentRound += 1
    }else if(hum === "rock" && com === "scissor"){
      displayResult.innerText = "You Win, scissor lost to rock !"
      humanScore += 1
      currentRound += 1
    }
  if (currentRound == 5) {
    if (humanScore > computerScore) {
      alert("YOU WIN THE GAME !!!")
      humanScore = 0
      computerScore = 0
      currentRound = 0
    } else if (humanScore < computerScore) {
      alert("you lost.")
      humanScore = 0
      computerScore = 0
      currentRound = 0
    } else {
      alert("unfortunately it's tied")
      humanScore = 0
      computerScore = 0
      currentRound = 0
    }
  }
  displayComputerWins.textContent = 'Total Computer round win :' + computerScore
  displayHumanWins.textContent = 'Total Human round win :' + humanScore
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
