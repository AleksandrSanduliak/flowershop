'use strict';

const getImg = document.querySelector('.slider__bcg--image')
// getImg.addEventListener('mousemove', e =>{
//     let x = e.clientX / window.innerWidth
//     let y = e.clientY / window.innerHeight
//     getImg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 25 + 'px)'
// })

// const shakeScreen = ( ) => {
    // let x = e.clientX / window.innerWidth
    //     let y = e.clientY / window.innerHeight

//         getImg.style.transform = 'translate(50px, 50px)'
//         getImg.style.transition = '7s all ease'
// }
// setInterval(shakeScreen, 5000)

const newspaperSpinning = [
    { transform: 'rotate(20deg)' },
  ];
  
  const newspaperTiming = {
    duration: 15000,
    iterations: 10000,
  }
    getImg.animate(newspaperSpinning, newspaperTiming);
