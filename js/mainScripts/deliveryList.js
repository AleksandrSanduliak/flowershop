'use strict'
const makeList = [{
        link: 'Экспресс-доставка<br>от 90 минут',
        img: '/assets/icons/deliveryList/car.svg',

    },
    {
        link: 'Низкие цены',
        img: '/assets/icons/deliveryList/price.svg',

    },
    {
        link: 'Каждый день поступление<br> свежих цветов',
        img: '/assets/icons/deliveryList/star.svg',

    },
    {
        link: 'Опытные флористы',
        img: '/assets/icons/deliveryList/flower.svg',

    }, {
        link: 'Работаем <br>без выходных',
        img: '/assets/icons/deliveryList/acces.svg',

    },

]

const list = (makeList) => `<li class="supply__item"><img src="${makeList.img}" alt="supply img" class="supply__img">${makeList.link}</li>`

let insertList = makeList.map(element => list(element)).join('')
const getList = document.querySelector('.supply__list')
getList.insertAdjacentHTML('beforeend', insertList)
