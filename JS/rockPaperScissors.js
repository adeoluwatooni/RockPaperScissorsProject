
// let score = {
//   wins : 0,
//   losses : 0,
//   ties : 0
// }

let  score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

// updateScoreElement()


// if (score === null ) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   }
// }

document.querySelector('.js-auto-play-button')
.addEventListener( 'click', () => {
  autoPlay() 
})

let isAutoPlayOn  = false
let playIntervalId;

const autoPlay = () => {
  let autoPlayButton = document.querySelector('.js-auto-play-button')

  if (!isAutoPlayOn) {
    playIntervalId = setInterval(function (){
      let randomPlayerMove = pickComputerMove()
      playGame(randomPlayerMove)
    }, 2000)
    isAutoPlayOn = true
    autoPlayButton.innerText = 'Stop Auto-Play'
    autoPlayButton.classList.add('stop-auto-play')
  } else {
    clearInterval(playIntervalId)
    isAutoPlayOn  = false
    autoPlayButton.innerText = 'Auto-Play'
    autoPlayButton.classList.remove('stop-auto-play')
  }
}

document.querySelector('.js-rock-button')
.addEventListener('click', () => {
  playGame('rock')
})

document.querySelector('.js-paper-button')
.addEventListener('click', () => {
  playGame('paper')
})

document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
  playGame('scissors')
})

document.body.addEventListener('keydown' , (event) => {
  if (event.key === 'r') {
    playGame('rock')
  } else if (event.key === 'p'){
    playGame('paper')
  } else if (event.key === 's') {
    playGame('scissors')
  }
})

const playGame = (playerMove) => {
  const computerMove = pickComputerMove()
  let result =''

  if (playerMove === 'rock'){
      if (computerMove === 'rock') {
      result = 'It\'s a tie'
    } else if (computerMove === 'paper') {
      result = 'You Lose'
    } else if (computerMove === 'scissors') {
      result = 'You Win'
    }

    console.log(computerMove)
    console.log(result)
   
  } 
  else if (playerMove === 'paper') {
    //const computerMove = pickComputerMove()

  result =''

  if (computerMove === 'rock') {
    result = 'You Win'
  } else if (computerMove === 'paper') {
    result = 'It\'s a tie'
  } else if (computerMove === 'scissors') {
    result = 'You Lose'
  }

    console.log(computerMove)
    console.log(result)

  }
  else if (playerMove === 'scissors') {
    //const computerMove = pickComputerMove()

  result =''

  if (computerMove === 'scissors') {
    result = 'It\'s a tie'
  } else if (computerMove === 'rock') {
    result = 'You Lose'
  } else if (computerMove === 'paper') {
    result = 'You Win'
  }

    console.log(computerMove)
    console.log(result)
  
  }


  if (result === 'You Win') {
    score.wins +=1
  } else if (result === 'You Lose') {
    score.losses +=1
  } else if (result === 'It\'s a tie') {
    score.ties +=1
  }
  console.log(score)

  localStorage.setItem('score', JSON.stringify(score))
  updateScoreElement()


  document.querySelector('.js-result').innerText = result

  document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="./images/${playerMove}-emoji.png" alt="Rock"> <img class="move-icon" src="./images/${computerMove}-emoji.png" alt="Scissors"> Computer`
  


  // alert(`You picked ${playerMove},Computer picked ${computerMove}. ${result}
  // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `)
}



const updateScoreElement = () => {
  document.querySelector('.js-score')
  .innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `
}





let computerMove = ''

const pickComputerMove = () => {
  let randomNumber = Math.random()

    if ( randomNumber > 0 && randomNumber < 1 / 3) {
      computerMove = 'rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3 ) {
      computerMove = 'paper'
    } else if (randomNumber >= 2 / 3 && randomNumber < 1 ) {
      computerMove = 'scissors'
    }
    return computerMove
  } 


  document.querySelector('.js-resetScoreButton')
  .addEventListener('click', () => {
    reset()
  })

  const reset = () => {
    score = {
      wins : 0,
      losses : 0,
      ties : 0
    }
    localStorage.removeItem('score')
    updateScoreElement()
    console.log(score)
    document.querySelector('.js-result').innerText = 'Lets Play'
    document.querySelector('.js-moves').innerText = 'Your move 😃... '
  }
