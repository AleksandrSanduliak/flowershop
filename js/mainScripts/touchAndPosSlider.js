'use strict'
const maxW768 = window.matchMedia("(max-width: 768px)")

const touchBtn = document.querySelectorAll('[data-touch-btns]')
touchBtn.forEach(e => {

    const arrows = `<button data-button-touch-left class="flowerCard__button flowerCard__button--left"><img src="/assets/icons/arrows/left-arrow.svg" alt="left arrow" class="flowerCard__arrow flowerCard__arrow--left"></button>
    <button data-button-touch-right class="flowerCard__button flowerCard__button--right"><img src="/assets/icons/arrows/right-arrow.svg" alt="right arrow" class="flowerCard__arrow flowerCard__arrow--right"></button>`

    e.insertAdjacentHTML('beforeend', arrows)

})

const touch = document.querySelectorAll('[data-touch]')

touch.forEach((ev) => {
    let touchBtnR = ev.querySelector('[data-button-touch-right]')
    let touchBtnL = ev.querySelector('[data-button-touch-left]')
    let touchWrapper = ev.querySelector('[data-touch-wrapper]')

    let maxLenghtR = -1400
    const sliderRange = () => {
        const rect = ev.getBoundingClientRect()
        if (touchWrapper) {
            const rectWrapper = touchWrapper.getBoundingClientRect()
            console.log(rect.right + ' rect right')
            console.log(rectWrapper.right + ' Wrapper right')
            if (rectWrapper.left > rect.left) {
                touchWrapper.style.left = 0

            } else if (rectWrapper.right < rect.right) {
                console.log('end of wrap')
                let wrapEnd = touchWrapper.style.left = `-${rectWrapper.width - rect.width}px`
                console.log(rect.width)
                console.log(rectWrapper.width)
                console.log(wrapEnd)
            }
        }
    }

    const BtnsSlider = () => {
        let bouquetsSliderWidth = document.querySelector('.bouquets__slider').offsetWidth
        let translate = 0


        function rightMove() {

            touchBtnR.addEventListener('click', eve => {
                let position = (translate - bouquetsSliderWidth - 30) + 'px'
                if (translate >= maxLenghtR) {
                    console.log(position)
                    touchWrapper.style.transform = `translateX(${position})`
                    touchWrapper.style.transition = "all 1s"
                    translate -= bouquetsSliderWidth
                    console.log(translate + 'translate')
                } else {
                    translate = 0
                    // position = -60
                    touchWrapper.style.transform = `translateX(0px)`
                    // bouquetsSliderWidth = 0
                    console.log(translate + 'translate2')
                    console.log('more than 1000')

                }
            })
        }
        if (touchBtnR) {
            rightMove()
        }

        // *********************** LEFT RIGHT **************************
        let maxLenghtL = 0

        function leftMove() {

            touchBtnL.addEventListener('click', eve => {
                let positions = (translate + bouquetsSliderWidth + 30) + 'px'
                if (translate >= maxLenghtL) {

                    translate = 0
                    touchWrapper.style.transform = `translateX(0px)`
                    console.log(translate)
                    console.log('menshe than 1000')
                    touchWrapper.style.transform = '0px'
                } else {
                    console.log(translate)
                    console.log(positions)
                    touchWrapper.style.transform = `translateX(${positions})`
                    touchWrapper.style.transition = "all 1s"
                    translate += bouquetsSliderWidth
                    console.log(translate + 'translateZZZ')
                }
            })
        }
        if (touchBtnL) {
            leftMove()
        }
    }
    BtnsSlider()

    let pressMouseDown = false
    let cursorPosition

    const touchSlider = () => {
        ev.addEventListener('mousedown', e => {
            pressMouseDown = true
            cursorPosition = e.offsetX - touchWrapper.offsetLeft
            // console.log('mousedown')
        })
        window.addEventListener('mouseup', () => {
            pressMouseDown = false
            // console.log('mouseUP')
        })
        ev.addEventListener('mousemove', e => {
            if (!pressMouseDown) return
            console.log('mousemove')
            e.preventDefault()
            touchWrapper.style.left = `${e.offsetX - cursorPosition}px`
            touchWrapper.style.transition = "all 0s"
            sliderRange()
        })

        let clientX
        let touchPress = false
        // TOUCH
        ev.addEventListener('touchstart', e => {
            touchPress = true
            clientX = e.touches[0].clientX - touchWrapper.offsetLeft
            console.log(clientX)
        })
        ev.addEventListener('touchend', () => {
            touchPress = false

        })
        ev.addEventListener('touchmove', e => {
            if (!touchPress) return
            touchWrapper.style.transition = "all 0s"
            let touchPos = touchWrapper.style.left = `${e.changedTouches[0].clientX - clientX}px`
            
            sliderRange()
        })


    }
    touchSlider()
})