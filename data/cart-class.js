class Cart {
  cartItems; // same as cartItem = undefined;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey))
      || [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '3'
      }];
  };

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  };

  addToCart(productId) {
    let matchingItem;

    this.cartItems.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    })

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId,
        quantity: 1
      });
    }

    this.saveToStorage();
  };

  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((product) => {
      if (product.productId !== productId) {
        newCart.push(product);
      }
    });

    this.cartItems = newCart;

    this.saveToStorage();
  };

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItems.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      };
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  };
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('business-cart');

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);
