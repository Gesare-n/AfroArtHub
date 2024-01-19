// Grabbing elements for different ship components
let shoppingCart = document.querySelector('.shopping-cart');
let searchForm = document.querySelector('.search-form');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

// Click events to toggle the 'active' class on different components
document.querySelector('#search-btn').onclick = () => {
    // Toggle 'active' class for searchForm and remove 'active' from others
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    // Toggle 'active' class for shoppingCart and remove 'active' from others
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
    // Toggle 'active' class for loginForm and remove 'active' from others
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
    // Toggle 'active' class for navbar and remove 'active' from others
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

// Close components on scroll
window.onscroll = () => {
    // Remove 'active' class from all components on scroll
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// Initializing Swiper for product slider
var swiperProduct = new Swiper(".product-slider", {
    loop: true,
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

// Initializing Swiper for review slider
var swiperReview = new Swiper(".review-slider", {
    loop: true,
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

// Event listener for remove buttons in the shopping cart
shoppingCart.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        let id = e.target.dataset.id;
        removeFromCart(id);
    }
});

// Function to remove an item from the cart based on its ID
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Update the cart display after removal
    updateCart();
}

// Function to update the contents of the shopping cart
function updateCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.querySelector('.cart-items');
    let cartTotal = document.querySelector('.cart-total-price');
    let cartTotalPrice = 0;

    cartItems.innerHTML = '';

    cart.forEach(item => {
        cartTotalPrice += item.price * item.quantity;

        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <h2>${item.name}</h2>
            <p>$${item.price} x ${item.quantity}</p>
          </div>
          <button class="remove-item" data-id="${item.id}">Remove</button>
        `;

        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = '$' + cartTotalPrice.toFixed(2);
}
