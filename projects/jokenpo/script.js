
const buttons = document.querySelectorAll('.player-wrapper button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const player = button.id
        const computer = computerPlay()
        const winner = game(player, computer)
        
        addIcons(player, computer)

        const result = document.querySelector('.result')
        result.innerText = (winner !== 'tie') ? winner.toUpperCase() + ' wins!' : "It's a tie!"

        const choiceContainer = document.querySelector('.choice-container')
        const resultContainer = document.querySelector('.result-container')

        choiceContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        
        const newGame = document.querySelector('.new-game')
        newGame.addEventListener('click', () => {
            choiceContainer.classList.remove('hidden')
            resultContainer.classList.add('hidden')
        })
    })
})

function toggleContainers() {
    const choiceContainer = document.querySelector('.choice-container')
    const resultContainer = document.querySelector('.result-container')
    choiceContainer.classList.toggle('hidden')
    resultContainer.classList.toggle('hidden')
}

function game(playerChoice, computerChoice) {

    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {return 'tie'}
        if (computerChoice === 'paper') {return 'computer'}
        return 'player'
    }
    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {return 'player'}
        if (computerChoice == 'paper') {return 'tie'}
        return 'computer'
    }
    // playerChoice = 'scissors'
    if (computerChoice === 'rock') {return 'computer'}
    if (computerChoice === 'paper') {return 'player'}
    return 'tie'
}

function computerPlay() {
    const rand = Math.ceil(Math.random() * 3).toString()
    switch (rand) {
        case '1': return 'rock';
        case '2': return 'paper';
        case '3': return 'scissors';
    }
}

function iconClasses(choice) {
    if (choice === 'rock') {
        return 'fa-hand-back-fist'
    }
    if (choice === 'paper') {
        return 'fa-hand'
    }
    return 'fa-hand-scissors'
}

function addIcons(player, computer) {
    const playerIcon = document.querySelector('.player-choice i')
    playerIcon.removeAttribute('class')
    playerIcon.classList.add('fa-solid', 'fa-7x', iconClasses(player))
    
    const computerIcon = document.querySelector('.computer-choice i')
    computerIcon.removeAttribute('class')
    computerIcon.classList.add('fa-solid', 'fa-7x', iconClasses(computer))
}