"use strict";
const basket = document.querySelectorAll(".basket");
let price = "";
const shoppingCart = [];
const arrayCart = [];

if (document.querySelector(".flowerCard__price--actual")) {
  price = parseInt(
    String(
      document
        .querySelector(".flowerCard__price")
        .querySelector(".flowerCard__price--actual").innerHTML
    ).replace(/ /g, "")
  );
}

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
      // console.log(JSON.parse(arrayCart))
      if (ulCart) {
        // ulCart.insertAdjacentHTML(
        //   "beforeend",
          
        // );
      }
    }, 10);
  }
};
makeCart();
sumHtml();
basket.forEach((e) => {
  let objCounter = 0
  e.addEventListener("click", (e) => {
    const addToCart = () => {
      sum += price;
      objCounter++
      localStorage.setItem("priceLocalStor", `${sum}`);
      const name = document.querySelector('.flowerCard__bot--title')
      const img = document.querySelector('.flowerCard__img')
      const obj = {number:objCounter,Name: name, image: img, price: price,}
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
// localStorage.clear();
