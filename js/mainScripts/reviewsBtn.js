const getItem = document.querySelector('.reviews__allreviews')
const getBtn = document.querySelectorAll('.reviews__bottom')
// console.log(getItem)
getItem.addEventListener('click', e => {
    getBtn.forEach(ev =>{
        ev.style.transition = 'all 2s'
        ev.classList.toggle('reviews__active')
        
    })
})