let bottomNav = document.querySelector('.header__bottom--list')

const botNav = [{
        navItem: 'Цветы поштучно',
        list: `<ul class="menu__dropdown">
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Гарантии</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Вопрос и ответ</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Корпоративным клиентам</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">О компании</a></li>
    </ul>`
        
    },
    {
        navItem: 'Розы',
        list: `<ul class="menu__dropdown" data-dropdown-body>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Гарантии</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Вопрос и ответ</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Корпоративным клиентам</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">О компании</a></li>
    </ul>`
    },
    {
        navItem: 'Букеты',
        list: `<ul class="menu__dropdown" data-dropdown-body>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Гарантии</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Вопрос и ответ</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Корпоративным клиентам</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">О компании</a></li>
    </ul>`
    },
    {
        navItem: 'Композиции',
        list: `<ul class="menu__dropdown" data-dropdown-body>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Гарантии</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Вопрос и ответ</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Корпоративным клиентам</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">О компании</a></li>
    </ul>`
    },
    {
        navItem: 'Подарки',
        list: `<ul class="menu__dropdown" data-dropdown-body>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Гарантии</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Вопрос и ответ</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Корпоративным клиентам</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">О компании</a></li>
    </ul>`
    },
    {
        navItem: 'Шары',
        list: `<ul class="menu__dropdown" data-dropdown-body>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Гарантии</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Вопрос и ответ</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">Корпоративным клиентам</a></li>
        <li class="menu__dropdown--item"><a href="#" class="menu__dropdown--item">О компании</a></li>
    </ul>`
    },
    {
        navItem: 'Свадебные букеты',
        list:'',
    },
    {
        navItem: 'Повод',
        list:'',
    },

] 


const makeElem = (botNav) => `<li class="header__bottom--item"><a href="#" class="header__bottom--link" data-dropdown>${botNav.navItem}</a>${botNav.list}</li>`

console.log(botNav)
let insertNav = botNav.map(element => makeElem(element)).join('')
document.querySelector('.header__bottom--list').insertAdjacentHTML('beforeend', insertNav)


let getBottomNav = document.querySelector('.bottom__nav--list')

navBotFixed = [{
    img: './assets/icons/bottomNav/main.svg',
    text: 'Главная',
    link: '',
},
{
    img: './assets/icons/bottomNav/Search.svg',
    text: 'Каталог',
    link: '',
},
{
    img: './assets/icons/bottomNav/shopping-basket.svg',
    text: 'Корзина',
    link: '',
},
{
    img: './assets/icons/bottomNav/favorite.svg',
    text: 'Избранное',
    link: '',
},
{
    img: './assets/icons/bottomNav/order.svg',
    text: 'Мои заказы',
    link: '../../html/search.html',
},
]
const makeNavFix = (navBotFixed) => `<a href="${navBotFixed.link}" class=""><li class="bottom__nav--item"><img src="${navBotFixed.img}" alt="icon item" class="bottom__nav--icon"><span class="bottom__nav--text">${navBotFixed.text}</span></li></a>`
let makeBotFixed = navBotFixed.map(element => makeNavFix(element)).join('')
getBottomNav.insertAdjacentHTML('beforeend', makeBotFixed)
