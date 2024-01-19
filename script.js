let searchForm = document.querySelector('.search-form');  //Select the search form element from the Dom

//When the search button is clicked,toggle the active class for the search form
//and remove the active class from the shopping cart,login form,and navigation bar
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
//Select the shopping cart element from the DOM
let shoppingCart = document.querySelector('.shopping-cart');

//When the cart button is clicked , toggle the active class for the shopping cart
//and remove the active class from the search form ,shopping cart, and login form
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//Select the navigation bar element from the DOM
let loginForm = document.querySelector('.login-form');

//When the menu button is clicked,toogle the active class for the login form
//and remove the active class from the search form,shopping cart and navigation bar
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

//Select the navigation bar element from the DOM
let navbar = document.querySelector('.navbar');


//when the menu button is clicked ,toggle the active class for the navigation bar
//and remove the active class from the search form shopping cart and login form
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

//When the user scrolls ,remove the active class from the search form,shopping cart,login form and navbar
window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//Create a new swiper instance for the product slider with specific options
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

//Create a new swiper instance for the review slider with specified options
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
