const maxHints = 10;
var nHints = 0;

var number = generateRandom();

const guessButton = document.querySelector('main button')
const guessInput = document.querySelector('main input')
const hintButton = document.querySelector('.hint')
const newGameButton = document.querySelector('.new-game')

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

hintButton.addEventListener('click', () => {
    if (nHints < maxHints) {
        let hint;
        do {
            hint = generateRandom();
            if (hint != number) {
                if (hint < number) {
                    console.log('The number is greater than ' + hint)
                }
                else {
                    console.log('The number is less than ' + hint)
                }

                nHints++;
            }
        } while (hint == number)
    }
    else {
        console.log('You already have too many hints, buddy...')
    }
})
newGameButton.addEventListener('click', () => {
    newGame();
})

function generateRandom() {
    const rand = Math.random()
    return (Math.ceil(rand * 100))
}

function check(guess) {
    console.log('The number is ' + number + ' and your guess was ' + guess)

    if (number == guess) {
        console.log('CORRECT! New game starting...')
        newGame()
    }
    else {
        console.log('WRONG...')
    }
}

function newGame() {
    number = generateRandom()
    nHints = 0
}