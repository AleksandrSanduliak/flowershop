'use strict';
const getCrossImage = document.querySelector('.order__img')
const getParent = document.querySelector('.order')

// const getItem = localStorage.getItem('getClicked')
const clicked = Boolean(localStorage.getItem('getClicked'))


getCrossImage.addEventListener('click', (ev) => {
    delete localStorage['getClicked']
    localStorage.setItem('getClicked', 'true')
    getParent.classList.add('orderTog')
})


if (clicked === true) {
    console.log('TRUE')
    getParent.classList.add('orderTog')
        setInterval(function () {
            getParent.classList.remove('orderTog')
        }, 1000000)
        localStorage.removeItem('getClicked')
    }