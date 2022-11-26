"use strict";
const basket = document.querySelectorAll(".basket");
let price = ''
const shoppingCart = [];
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
sumHtml();
basket.forEach((e) => {
  e.addEventListener("click", (e) => {
    const addToCart = () => {
      sum += price;
      localStorage.setItem("priceLocalStor", `${sum}`);
      shoppingCart.push("add " + index + " " + price + " общая сумма " + sum);
      index++;
      console.log(shoppingCart);
      sumHtml();
    };

    addToCart();
  });
});
localStorage.clear()
