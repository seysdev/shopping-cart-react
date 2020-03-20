import {
  Checkout,
  Payment
} from '../components';

const PaymentRoutes = [
  {
    path: '/checkout',
    component: Checkout,
    auth: true
  },
  {
    path: '/payment',
    component: Payment,
    auth: true
  }
]

export {
  PaymentRoutes
}