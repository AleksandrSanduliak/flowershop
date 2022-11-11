'use strict';
import {
    imgList
} from './flowerCard.js'

// ********************************************** insert SLIDER BUTTONS **************************************
const getAllImgs = document.querySelectorAll('[data-slider-btn]')
getAllImgs.forEach(e => {

    const arrows = `<button data-button-left class="flowerCard__button flowerCard__button--left"><img src="/assets/icons/arrows/left-arrow.svg" alt="left arrow" class="flowerCard__arrow flowerCard__arrow--left"></button>
    <button data-button-right class="flowerCard__button flowerCard__button--right"><img src="/assets/icons/arrows/right-arrow.svg" alt="right arrow" class="flowerCard__arrow flowerCard__arrow--right"></button>`

    e.insertAdjacentHTML('beforeend', arrows)
})
// ********************************************** insert SLIDER BUTTONS **************************************


// ********************************************** insert flowercard images **************************************

    const getUl = document.querySelector('.flowerCard__item')
    console.log(getUl)
    const flowercardLi = (imgList) => `<li ${imgList.current} class="flowerCard__li" ><img src="${imgList.link}" alt="Фото роз" class="flowerCard__img" ></li>`
    const insertUl = imgList.map(ev => flowercardLi(ev)).join('')
    getUl.insertAdjacentHTML('afterbegin', insertUl)


// ********************************************** insert flowercard images **************************************

// ***************************************************** SLIDER FUNCTIONAL **************************************
let sliders = document.querySelectorAll('[data-slider]');
for (let i = 0; i < sliders.length; i++) {
    init_slider(sliders[i]);
}

function init_slider(slider) {
    let slide = slider.querySelectorAll('[data-slide]');
    let next = slider.querySelector('[data-button-right]');
    let back = slider.querySelector('[data-button-left]')
    let i = 0;

    slide.forEach(e => {
        slide[0].style.opacity = '1'
    })
    let sliderWrapper = slider.querySelector('[data-dots]')
    let sliderLineWrap = slider.querySelector('[data-lines]')
if (sliderWrapper){
    const insertDots = () => {
        let str = ''
        for (let b = 0; b < slide.length; b++) {
            str += '<span class="dot"></span>'
        }
        const ulWrap = `<div class="dots">${str}</div>`
        sliderWrapper.insertAdjacentHTML('beforeend', ulWrap)
    }
    insertDots()
} else if(sliderLineWrap){
    const insertLines = () => {
        
        let str = ''
        for (let b = 0; b< slide.length; b++){
            str += '<span class=" dot line__slider"></span>'
        }
        const ulWrap = `<div class="dots lines__slider">${str}</div>`
        sliderLineWrap.insertAdjacentHTML('beforeend', ulWrap)
    }
    insertLines()
}

    let dots = slider.querySelectorAll('.dot')
    dots.forEach((ev, index) => {
        dots[0].classList.add('activedot')
        const clickDots  = ev.addEventListener('click', eve => {
            console.log(index, ev , eve.target)
            i = index
            dots.forEach((events) => {
                events.classList.remove('activedot')
            })
            slide.forEach((eventis) => {
                eventis.classList.remove('block')
            })
            eve.target.classList.add('activedot')
            slide[i].classList.add('block')
            if(i <= 0){
                console.log('work')
                slide[0].style.opacity = '1'
            } else {
                slide[0].style.opacity = '0'
            }
        })
    })

    function activeDot() {
        const actDot = document.querySelector('.activedot')
        dots.forEach(ev => {
            ev.classList.remove('activedot')
            dots[i].classList.add('activedot')
        })
    }

    if(next){
        next.addEventListener('click', function () {
        
            i++
            slide[0].style.opacity = '0'
            if (i >= slide.length) {
                slide[0].style.opacity = '0'
                slide[i - 1].classList.remove("block");
                i = 0;
                slide[0].style.opacity = '1'
                slide[i].classList.add("block")
            } else {
                slide[i - 1].classList.remove("block")
                slide[i].classList.add("block")
            }
            activeDot()
            console.log(i)
        })
    }
   
    if(back){
        back.addEventListener('click', function () {
            i--
            if (i < 0) {
                slide[0].style.opacity = '0'
                slide[i + 1].classList.remove("block")
                i = slide.length - 1;
                slide[i].classList.add("block");
            } else if (i <= 0){
                slide[0].style.opacity = '1'
                slide[i+1].classList.remove('block')
            } 
            else {
                slide[i + 1].classList.remove("block")
                slide[i].classList.add("block")
            }
            activeDot()
            console.log(i)
        })
    }

}