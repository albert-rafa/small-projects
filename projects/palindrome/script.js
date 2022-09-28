
const input = document.querySelector('.input-wrapper input')
input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        console.log('Opa, enter!')
        check(input.value)
    }
})

const button = document.querySelector('.input-wrapper button')
button.addEventListener('click', () => {
    console.log('Opa, botão!')
    check(input.value)
})

function check(input) {
    const text = input.toLowerCase(). split('').filter(item => {
        return item.match(/\w/g)
    })

    const answer = document.querySelector('.answer')
    answer.innerText = text.toString().localeCompare(text.reverse().toString()) ? "IT'S NOT A PALINDROME" : "IT'S A PALINDROME"
}