const copyBtn = document.querySelector('.slider__btn')
const getValue = document.querySelector('.slider__input').value
console.log(getValue)

copyBtn.addEventListener('click', e => {
    navigator.clipboard.writeText(getValue)
})