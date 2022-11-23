"use strict";
const basket = document.querySelectorAll(".basket");

const shoppingCart = [];
const price = parseInt(
  String(
    document
      .querySelector(".flowerCard__price")
      .querySelector(".flowerCard__price--actual").innerHTML
  ).replace(/ /g, "")
);

let sum = 0;
let index = 1;
let sumHtml = () => {
  
  setTimeout(()=>{
    document.querySelector(".header__card--summ").innerHTML = sum + " ₽";
  }, 10)
};
sumHtml()
// console.log(price);
basket.forEach((e) => {
  e.addEventListener("click", (e) => {
    const addToCart = () => {
      // console.log(price)
      sum += price;

      shoppingCart.push("add " + index + " " + price + " общая сумма " + sum);
      index++;
      console.log(shoppingCart);
      sumHtml()
    };

    addToCart();
  });
});
