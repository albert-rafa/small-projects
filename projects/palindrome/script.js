
const input = document.querySelector('.input-wrapper input')
const button = document.querySelector('.input-wrapper button')
button.addEventListener('click', () => {
    let text = input.value.toLowerCase().trim()

    let inverse = [];
    for (let i = 0; i < text.length; i++) {
        inverse.unshift(text[i])
    }

    const answer = document.querySelector('.answer')
    answer.innerText = (text.localeCompare(inverse.toString().replaceAll(',', ''))) ? "IT'S NOT A PALINDROME" : "IT'S A PALINDROME"
})