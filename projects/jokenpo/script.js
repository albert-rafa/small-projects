
const buttons = document.querySelectorAll('.player-wrapper button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const winner = game(button.id)
    })
})

function game(playerChoice) {
    const computerChoice = computerPlay();

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