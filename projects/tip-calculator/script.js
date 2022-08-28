const tip = document.querySelector('#tip')
const tipRange = document.querySelector('input[type=range]')

tip.addEventListener('change', () => {
    tipRange.value = tip.value
    console.log(tip.value)
})
tipRange.addEventListener('change', () => {
    tip.value = tipRange.value
    console.log(tipRange.value)
})