export let cart;

loadFromStorage();

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'))
    || [{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: '3'
    }];
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  })

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
}

export function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += 1;
  });

  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((product) => {
    if (product.productId !== productId) {
      newCart.push(product);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  })

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}