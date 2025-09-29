import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

// async wraps code in a Promise
async function loadPage() {
  try {
    // throw 'error';
    await loadProductsFetch(); // await lets us write asynchronous code like normal code
    /*
    await new Promise((resolve, reject) => {
      // throw 'error2';
      loadProducts(() => {
        // reject('error3');
        resolve();
      });
    });
    */
  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
loadPage().then((value) => {
  console.log('next step');
  console.log(value);
});

Promise.all([
  loadProductsFetch()
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  return new Promise(() => {
    loadCart();
    resolve();
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/
