export const cart = []; // this variable can be used outside of this file

export function addToCart(productId){
  let matchingItem;

    cart.forEach((cartItem) => { // checking if item already exists ... so increase quantity
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    if(matchingItem){
      matchingItem.quantity++;
    } else{
      cart.push({ // adding an object ... 1 object = 1 product
        productId: productId,
        quantity: 1
      });
    }
}