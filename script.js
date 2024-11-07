let menuBar = document.querySelector('.menu-bar');
document.querySelector('.menu-btn').onclick = () => {
  menuBar.classList.toggle('active');
  searchForm.classList.remove('active');
  shopingCart.classList.remove('active');
}

let searchForm = document.querySelector('.header .header-search-form input');
document.querySelector('.search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  menuBar.classList.remove('active');
  shopingCart.classList.remove('active');
}

let shopingCart = document.querySelector('.header .cart-items-container');
document.querySelector('.cart-btn').onclick = () => {
  shopingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  menuBar.classList.remove('active');
}

window.onscroll = () => {
  menuBar.classList.remove('active');
  searchForm.classList.remove('active');
  shopingCart.classList.remove('active');
}