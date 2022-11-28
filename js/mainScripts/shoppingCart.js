"use strict";
const basket = document.querySelectorAll(".basket");
let price = "";
const shoppingCart = [];
const arrayCart = [];
const getFlowerInf = JSON.parse(localStorage.getItem('arrayFlowerCard'))
// 
let sum = Number(localStorage.getItem("priceLocalStor"));
let index = 1;
let sumHtml = () => {
  setTimeout(() => {
    document.querySelector(".header__card--summ").innerHTML = sum + " ₽";
    if (localStorage.getItem("priceLocalStor")) {
      console.log("matching local storage");
      const prStor = Number(localStorage.getItem("priceLocalStor"));
      document.querySelector(".header__card--summ").innerHTML = prStor + " ₽";
    } else document.querySelector(".header__card--summ").innerHTML = 0 + " ₽";
  }, 1);
};
let makeCart = () => {
  let ulCart = document.querySelector(".cartshop-list");
  if (sum === 0) {
    setTimeout(() => {
      console.log("empty");

      if (ulCart) {
        ulCart.insertAdjacentHTML(
          "beforeend",
          '<li class="cartshop-item">Список Пуст, добавте что-то в корзину!</li>'
        );
      }
    }, 10);
  }
  if (sum >= 1) {
    setInterval(() => {
      console.log("cart isnt empty");

    }, 1000);
      if (ulCart) {
        for(let c = 0; c <= getFlowerInf.length; c++){
          const item = `<li class="cartshop-item">${getFlowerInf[c].image}<div class="cartshop-body">${getFlowerInf[c].Name}</div><div class="cartshop-calculator"><button class="cartshop-calculator--plus">+</button>
          <p class="counter">1</p><button class="cartshop-calculator--minus">-</button></div></li> <p class="resultCalc"></p>`
          ulCart.insertAdjacentHTML('beforeend', item)
        }
      }

  }
};


makeCart();
sumHtml();
basket.forEach((ev) => {
  let objCounter = 0
  ev.addEventListener("click", (e) => {
    price = parseInt(
      String(
       ev.parentElement.querySelector(".flowerCard__price").querySelector(".flowerCard__price--actual").innerHTML
      ).replace(/ /g, "")
    );
    console.log(ev.parentElement.parentElement)
    const name = ev.parentElement.parentElement.parentNode.querySelector('.flowerCard__bot--title').outerHTML
    let img = ev.parentElement.parentElement.parentElement.querySelector('.flowerCard__img').outerHTML

    const addToCart = () => {
     
      sum += price;
      objCounter++
      localStorage.setItem("priceLocalStor", `${sum}`);


      const obj = {number: objCounter, Name: name, image: img, price: price,}
      arrayCart.push(obj)
      localStorage.setItem('arrayFlowerCard', JSON.stringify(arrayCart))

      
      console.log(arrayCart)
      shoppingCart.push("add " + index + " " + price + " общая сумма " + sum);
      index++;
      
      sumHtml();
      makeCart();
    };

    addToCart();
  });
});
localStorage.clear();
