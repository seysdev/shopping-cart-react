import {
  PAYMENT_SET_PRODUCTS,
  PAYMENT_SET_AMOUNT
} from './constants';

function setProducts(payload) {
  return {
    type: PAYMENT_SET_PRODUCTS,
    payload
  }
}

function setAmount(payload) {
  return {
    type: PAYMENT_SET_AMOUNT,
    payload
  }
}

export {
  setProducts,
  setAmount
}