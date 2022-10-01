
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
    })
})

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
    const playerIcon = document.createElement('i')
    playerIcon.classList.add('fa-solid')
    playerIcon.classList.add(iconClasses(player))
    playerIcon.classList.add('fa-7x')
    const computerIcon = document.createElement('i')
    computerIcon.classList.add('fa-solid')
    computerIcon.classList.add(iconClasses(computer))
    computerIcon.classList.add('fa-7x')

    const playerWrapper = document.querySelector('.player-choice')
    playerWrapper.appendChild(playerIcon)
    const computerWrapper = document.querySelector('.computer-choice')
    computerWrapper.appendChild(computerIcon)
}