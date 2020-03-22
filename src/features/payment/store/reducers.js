import {
  initialState
} from './state';

import {
  PAYMENT_SET_PRODUCTS,
  PAYMENT_SET_AMOUNT
} from './constants';

function PaymentReducer(state = initialState, action) {
  switch (action.type) {
    case PAYMENT_SET_PRODUCTS: {
      const {
        payload: currentProduct
      } = action;

      const findProduct = state.products.find(product => product.id == currentProduct.id);
      const index = state.products.map(item => item.id).indexOf(currentProduct.id);

      if (!findProduct) {
        currentProduct.quantity = 1;

        return Object.assign({}, state, {
          products: [
            ...state.products,
            currentProduct
          ]
        })
      }

      state.products[index].quantity = state.products[index].quantity + 1;
      return Object.assign({}, state, {
        products: [
          ...state.products
        ]
      })
    }

    case PAYMENT_SET_AMOUNT: {
      const {
        payload
      } = action;

      return Object.assign({}, state, {

      })
    }

    default:
      return state;
  }

}

export {
  PaymentReducer
}