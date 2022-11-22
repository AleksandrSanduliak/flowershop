'use strict';
// debugger;
let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')

let headerClocks = document.querySelector('.header__times')
let burgers = document.querySelector('.burgers')
let closez = document.querySelector('.burger__close')

let burgerText = {
    clocks: 'Пн-Сб: 8:00–20:00 Вс: 9:00–20:00',
    menu: `
    <ul class="menu" id="firstmenu">
    <li class="menu__list"><a href="#" class="menu__item" data-scroll>Доставка</a></li>
    <li class="menu__list"><a href="#" class="menu__item" data-scroll>Оплата</a></li>
    <li class="menu__list"><a href="#" class="menu__item" data-scroll>Отзывы</a></li>
    <li class="menu__list"><a href="#" class="menu__item" data-scroll>Блог</a></li>
    <li class="menu__list"><a href="#" class="menu__item" data-scroll data-dropdown>Информация</a>
    <ul class="menu__dropdown" data-dropdown-body>
    <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item" data-scroll>Гарантии</a></li>
    <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item" data-scroll>Вопрос и ответ</a></li>
    <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item" data-scroll>Корпоративным клиентам</a></li>
    <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item" data-scroll>О компании</a></li>
</ul></li>
    <li class="menu__list"><a href="#" class="menu__item" data-scroll>Контакты</a></li>
</ul>`,
    clockImg: './assets/icons/header-clocks.png',
}
/* <img class="menu__list--arrow" src="/assets/icons/header-arrow.svg" alt="Info arrow"> */
let burgerMenu = {
    menu: `    <ul class="menu" id="burgermenu">
    <li class="menu__list"><a href="#" class="menu__item">Доставка</a></li>
    <li class="menu__list"><a href="#" class="menu__item">Оплата</a></li>
    <li class="menu__list"><a href="#" class="menu__item">Отзывы</a></li>
    <li class="menu__list"><a href="#" class="menu__item">Блог</a></li>
    <li class="menu__list"><a href="#" class="menu__item">Гарантии</a></li>
    <li class="menu__list"><a href="#" class="menu__item">Вопрос и ответ</a></li>
    <li class="menu__list"><a href="#" class="menu__item">Корпоративным клиентам</a></li>
    <li class="menu__list"><a href="#" class="menu__item">О компании</a></li>
    <li class="menu__list"><a href="#" class="menu__item">Контакты</a></li>
</ul>
    `,
}
// making nav, and clocks text/img

document.querySelector('.header__clock-text').insertAdjacentText('afterbegin', burgerText.clocks)
document.querySelector('.burger__clocks').insertAdjacentText('afterbegin', burgerText.clocks)
document.querySelector('.header-clocks').setAttribute('src', burgerText.clockImg)
document.querySelector('.burger__top--img').setAttribute('src', burgerText.clockImg)


// making nav and burger top clocks

let butgercontact = [{
        text: '+7 (920) 211-49-03',
        src: './assets/icons/Call.svg',
        link: '#',
    },
    {
        text: 'ул. Революции 1905 года 80',
        src: './assets/icons/map.svg',
        link: '#',
    },
    {
        text: 'ул. Вл. Невского 17',
        src: './assets/icons/map.svg',
        link: '#',
    },
    {
        text: 'info@lavkaroz.ru',
        src: './assets/icons/mail.svg',
        link: '#',
        last: 'burger__contact--last',
        
    },

]
const getElem = (butgercontact) => `
    <div class="burgercontact"><a class ="burgercontact__link" href="${butgercontact.link}"><img src="${butgercontact.src}" alt="burgerimage" class="brgimage"><span class="burgercontact__text ${butgercontact.last}">${butgercontact.text}</span></a></div>
`
let draw = butgercontact.map(element => getElem(element)).join('');
document.querySelector('.contacts').insertAdjacentHTML('beforeend', draw)
document.querySelector('.header__contacts--tel').insertAdjacentHTML('afterbegin', draw)


const getElems = (butgercontact) => `
<li><a class ="burgercontact__link" href="${butgercontact.link}"><img src="${butgercontact.src}" alt="burgerimage" class="brgimage"><span class="burgercontact__text">${butgercontact.text}</span></a>
</li>
`

let allDataContacts = document.querySelectorAll('[data-contacts]')
let makeCont = butgercontact.map(element => getElems(element)).join('')
const listContacts = document.createElement('ul')
listContacts.insertAdjacentHTML('beforeend', makeCont)

const social = [{
        src: './assets/icons/media/WhatsApp.svg',
        link: 'whatsapp.com',
    },
    {
        src: './assets/icons/media/Telegram.svg',
        link: 'telegram.com',
    },
    {
        src: './assets/icons/media/VK.svg',
        link: 'vk.com',
    },
    {
        src: './assets/icons/media/Instagram.svg',
        link: 'instagram.com',
    },
]


const getSocial = (social) => `
<div class=bgSocial><a href="${social.link}"><img class="bgSocial__image" src="${social.src}" alt="Социальные сети"></a></div> 
`

let makeSocial = social.map(socialIcons => getSocial(socialIcons)).join('');
document.querySelector('.social__wrapper').insertAdjacentHTML('beforeend', makeSocial)


// dynamic menu 
let burMenu = document.querySelector('.burger__top')

// More 768 > close burger
const moreTab = window.matchMedia('(min-width: 840.98px)')

function printConsLog() {
    nav.classList.remove('active')
}
printConsLog(moreTab.matches)
moreTab.addEventListener('change', (ev) => printConsLog(ev.matches))

burMenu.insertAdjacentHTML('afterend', burgerText.menu)
burMenu.insertAdjacentHTML('afterend', burgerMenu.menu)

// OPEN/CLOSE BURGER
burger.addEventListener('click', function () {
    nav.classList.toggle('active')
})

closez.addEventListener('click', function () {
    nav.classList.remove('active')
})