
const input = document.querySelector('.input-wrapper input')
const button = document.querySelector('.input-wrapper button')
button.addEventListener('click', () => {
    const text = input.value.toLowerCase().split('').filter(item => {
        return item.match(/\w/g)
    })
    const reverse = text.reverse()

    const answer = document.querySelector('.answer')
    answer.innerText = (text.toString().localeCompare(reverse.toString())) ? "IT'S NOT A PALINDROME" : "IT'S A PALINDROME"
})