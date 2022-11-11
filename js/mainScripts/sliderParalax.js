'use strict';

const getImg = document.querySelector('.slider__bcg--image')
getImg.addEventListener('mousemove', e =>{
    let x = e.clientX / window.innerWidth
    let y = e.clientY / window.innerHeight
    getImg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 25 + 'px)'
})
