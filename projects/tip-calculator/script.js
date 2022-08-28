const bill = document.querySelector('#bill')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const tipRange = document.querySelector('input[type=range]')

bill.addEventListener('change', () => {
    calculate(bill.value, people.value, tip.value)
})
people.addEventListener('change', () => {
    calculate(bill.value, people.value, tip.value)
})
tip.addEventListener('change', () => {
    tipRange.value = tip.value
    calculate(bill.value, people.value, tip.value)
})
tipRange.addEventListener('change', () => {
    tip.value = tipRange.value
    calculate(bill.value, people.value, tip.value)
})

function calculate(b, p, t) {
    const total = tipping(b, p, t);
    const response = document.querySelector('.tip-person')
    response.innerText = "Each person should tip $" + total.toFixed(2)
}

function tipping(b, p, t) {
    const percentage = t / 100;
    return ((b * percentage) / p)
}