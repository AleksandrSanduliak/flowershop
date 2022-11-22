function init(){
    let map = new ymaps.Map("map", {
        center: [59.12453626, 37.90707874],
        zoom: 17,
    }, {
        suppressMapOpenBlock: true,
      });
    // );
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;</div>'
    ),
    myPlacemarkWithContent = new ymaps.Placemark([59.12462281, 37.90724554], {
        hintContent: 'Наше местоположение',
        balloonContentHeader: `<div style="display:flex;" class="header__contacts">
        <a href="tel:+7 (920) 211-49-03" class="header__contacts--link"><img src="./assets/icons/contacts-phone.svg" alt="Phone Contacts" class="header__contacts--img"></a>
        <div style="display: block; width:145px;" class="header__contacts--wrap">
            <span  class="header__contacts--tel">
                <span class="header__contacts--wraptel">
                    <a href="#" class="header__contacts--tel">+7 (920) 211-49-03</a>
                    <span class="header__contacts--drop">
                    </span>
                </span>
                <a href="#" class="header__contacts--linkcall"><span class="header__contacts--text">Заказать
                        звонок</span></a></span></div></div>
                        <br><br>
    <a class="burgercontact__link" href="#"><img src="./assets/icons/mail.svg" alt="burgerimage" class="brgimage"><span style="color: #0093A2;" class="burgercontact__text">info@lavkaroz.ru</span></a>
    <br>
    <div class="header__times--map"><img src="./assets/icons/header-clocks.png" alt="Clocks" class="header-clocks"><span class="header__clock-text">Пн-Сб: 8:00–20:00<br> Вс: 9:00–20:00</span></div>
    `,
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: './assets/icons/mapIcon.svg',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
        // layout
    });

map.geoObjects
    .add(myPlacemarkWithContent);

    map.controls.remove('searchControl')
    map.controls.remove('trafficControl')
    map.controls.remove('typeSelector')
    map.controls.remove('fullscreenControl')
    map.controls.remove('rulerControl') 
    map.controls.remove('button')
    map.controls.remove('listBox')

    map.behaviors.disable('scrollZoom');
    map.events.add('click', function () {
        map.behaviors.enable('scrollZoom');
    });
}
ymaps.ready(init);



