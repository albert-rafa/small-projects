var number = generateRandom();

const guessButton = document.querySelector('main button')
const guessInput = document.querySelector('main input')

guessButton.addEventListener('click', () => {
    const guess = guessInput.value;
    if ( guess && (guess > 0) && (guess < 101) ) {
        check(guess)
        guessInput.value = ''
    }
})
guessInput.addEventListener('keydown', (e) => {
    const guess = guessInput.value;
    const enter = ( (e.code === 'Enter') || (e.code === 'NumpadEnter') )

    if ( guess && enter && (guess > 0) && (guess < 101) ) {
        check(guess)
        guessInput.value = ''
    }
})

function generateRandom() {
    const rand = Math.random()
    return (Math.ceil(rand * 100))
}

function check(guess) {
    console.log('The number is ' + number + ' and your guess was ' + guess)

    if (number == guess) {
        console.log('CORRECT!')
    }
    else {
        console.log('WRONG...')
    }
}