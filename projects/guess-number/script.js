const maxHints = 10;
var nHints = 0;

var number = generateRandom();

const guessButton = document.querySelector('main button')
const guessInput = document.querySelector('main input')
const hintButton = document.querySelector('.hint')
const newGameButton = document.querySelector('.new-game')
const newGameButtonModal = document.querySelector('.modal button')

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
    const p = document.querySelector(".hints")
    if (nHints < maxHints) {
        let hint;
        do {
            hint = generateRandom();
            if (hint != number) {
                if (hint < number) {
                    p.innerText = "The number is greater than " + hint
                }
                else {
                    p.innerText = "The number is less than " + hint
                }

                nHints++;
            }
        } while (hint == number)
    }
    else {
        p.innerText = "You already had too many hints"
    }
})
newGameButton.addEventListener('click', () => {
    newGame();
})

newGameButtonModal.addEventListener('click', () => {
    newGame()
    const modal = document.querySelector('.modal-container')
    modal.classList.add('hidden')
})

function generateRandom() {
    const rand = Math.random()
    return (Math.ceil(rand * 100))
}

function check(guess) {

    if (number == guess) {
        const p = document.querySelector('.modal p')
        p.innerText = `The number was ${number}`

        const modal = document.querySelector('.modal-container')
        modal.classList.remove('hidden')

        newGame()
    }
    else {
        console.log('WRONG... The number was ' + number)
    }
}

function newGame() {
    number = generateRandom()
    nHints = 0
}