// dropdown top menu info li
let getDrop = document.querySelectorAll('[data-dropdown]')

getDrop.forEach(element => {
  const arrow = document.createElement('img')
  arrow.className = 'header__bottom--img, arrow'
  arrow.src = './assets/icons/header-arrow.svg'
  element.appendChild(arrow)
  // element.insertAdjacentHTML('beforeend', arrow)
  element.addEventListener('click', (ev) => {
    let sibElem = ev.target.nextElementSibling;

    if (sibElem) {
      console.log(sibElem)
      sibElem.classList.toggle('dropdown');
    }
  })
});