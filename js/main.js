const burgerBtn = document.getElementById('navbarToggler');
const mobileMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    mobileMenu.classList.toggle('open');
})

// For input[number]

let quantityArrowMinus = document.querySelector('.quantity-arrow-minus');
    let quantityArrowPlus = document.querySelector('.quantity-arrow-plus');
    let quantityNum = document.querySelector('.quantity-num');

    function quantityMinus() {
      if (quantityNum.value > 1) {
        quantityNum.value = +quantityNum.value - 1;
      }
    }

    function quantityPlus() {
      quantityNum.value = +quantityNum.value + 1;
    }