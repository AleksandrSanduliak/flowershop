const getItemAbout = document.querySelector('.about__hide')
let getHideId = document.querySelectorAll('#hidepar')
console.log(getHideId)
getItemAbout.addEventListener('click', ev => {
    for(hide of getHideId){
        hide.classList.toggle('hidespar')
        // hide.style.transition = 'margin 2s'
        // const getText = document.querySelector('.about__text').style.transition = 'all 2s'
        // getText
    }
})    
