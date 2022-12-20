"use strict";
const basket = document.querySelectorAll(".basket");
let price = "";
const shoppingCart = [];
const arrayCart = [];

let sum = Number(localStorage.getItem("priceLocalStor"));
let index = 1;
let sumHtml = () => {
  setTimeout(() => {
    document.querySelector(".header__card--summ").innerHTML = sum + " ₽";
    if (localStorage.getItem("priceLocalStor")) {
      // console.log("matching local storage");
      const prStor = Number(localStorage.getItem("priceLocalStor"));
      document.querySelector(".header__card--summ").innerHTML = prStor + " ₽";
    } else document.querySelector(".header__card--summ").innerHTML = 0 + " ₽";
  }, 1);
};

setInterval(sumHtml, 100)
basket.forEach((ev) => {

  ev.addEventListener("click", (e) => {
    price = parseInt(
      String(
        ev.parentElement.querySelector(".flowerCard__price").querySelector(".flowerCard__price--actual").innerHTML
      ).replace(/ /g, "")
    );
    console.log(ev.parentElement.parentElement)
    const name = ev.parentElement.parentElement.parentNode.querySelector('.flowerCard__bot--title').outerHTML
    const img = ev.parentElement.parentElement.parentElement.querySelector('.flowerCard__img').outerHTML

    const addToCart = () => {

      sum += price;
      let objCounter = 0
      objCounter++
      localStorage.setItem("priceLocalStor", `${sum}`);


      const obj = {
        number: objCounter,
        Name: name,
        image: img,
        price: price,
      }
      arrayCart.push(obj)
      localStorage.setItem('arrayFlowerCard', JSON.stringify(arrayCart))

      console.log(arrayCart)
      shoppingCart.push("add " + index + " " + price + " общая сумма " + sum);
      index++;
      // multiplication(obj)

      sumHtml();
    };

    addToCart();
  });

});
let ulCart = document.querySelector(".cartshop-list");

let makeCart = () => {
  const getFlowerInf = JSON.parse(localStorage.getItem('arrayFlowerCard'))
  console.log(getFlowerInf)
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
      // console.log("cart isnt empty");

    }, 1000);
    if (ulCart) {
      for (let key in getFlowerInf) {
        const item = `<li class="cartshop-item">${getFlowerInf[key].image}<div class="cartshop-body">${getFlowerInf[key].Name}
            </div><div class="cartshop-calculator"><button class="cartshop-calculator--minus">-</button>
           <p class="counter">1</p><button class="cartshop-calculator--plus">+</button></div><p class="resultCalc"></p>
           <p class="price-result">${getFlowerInf[key].price}</p>
           <button data-rembtn class="xcross"><span class="xcross-line xcross-line--one"></span><span class="xcross-line xcross-line--two"></span></button>
           
           </li>`
        ulCart.insertAdjacentHTML('beforeend', item)
      }
    }

  }
};
makeCart();

const removeCart = () => {
  let Butte
  if (Butte = document.querySelector('.cartshop-subtitle'))
    Butte.addEventListener('click', () => {

      console.log('click')
      localStorage.clear()
    })
}
const removeLi = () => {
  const foundBtns = document.querySelectorAll('[data-rembtn]')
  console.log(foundBtns)
  foundBtns.forEach(ev => {
    ev.addEventListener('click', e => {
      console.log(ev.parentElement.remove())
    })
  })
}
removeLi()
removeCart()

const calcWrapper = document.querySelectorAll('.cartshop-calculator')

let cartCounter = () => {

  calcWrapper.forEach(ev => {
    const minus = ev.querySelector('.cartshop-calculator--minus')
    const plus = ev.querySelector('.cartshop-calculator--plus')
    console.log(calcWrapper)
    minus.addEventListener('click', (ev) => {
      console.log('click')
      calculator(-1)
    })
    plus.addEventListener('click', (ev) => {
      console.log('click')
      calculator(+1)
    })
    let calcCount = 1
    const calculator = (i) => {
      console.log(i, calcCount)
      const countCalc = ev.querySelector('.counter')
      // console.log(ev)
      if (calcCount >= 1 && calcCount < 100) {
        calcCount += i
        countCalc.innerHTML = calcCount
      } else {
        i = 1
        calcCount = 1
        countCalc.innerHTML = calcCount
      }
      console.log(i, calcCount)
      multiplication(calcCount)
      const parseCount = () => {
       const getCount =  JSON.parse(localStorage.getItem('arrayFlowerCard'))
       
       getCount.forEach(ev => {
        

       })
      }
      setInterval(parseCount, 1000)
    }
    const multiplication = (calcCount) => {
      const priceElem = ev.parentNode.querySelector('.price-result')
      let priceVal = priceElem.textContent
      priceElem.innerHTML = priceVal * calcCount

      if (priceElem) {
        const allCount = document.querySelectorAll('.counter')
        allCount.forEach(ev => {
          const parseArray = JSON.parse(localStorage.getItem('arrayFlowerCard'))
          parseArray.forEach((evs, indx) => {
            const rewriteArray = evs.number = Number(allCount[indx].textContent)
          })
          console.log(parseArray)
          localStorage.setItem('arrayFlowerCard', JSON.stringify(parseArray))
        })

      }
    }

    const sumCart = () => {
      let sumRes = 0
      const getPrice = document.querySelectorAll('.price-result')
      // console.log(getPrice)
      if (getPrice) {
        getPrice.forEach(ev => {
          sumRes += Number(ev.textContent)
          localStorage.setItem('priceLocalStor', `${sumRes}`)
        })
      } else return console.log('error price count doesnt found')
    }
    setInterval(sumCart, 1000)
  })
}
cartCounter()
// localStorage.clear()