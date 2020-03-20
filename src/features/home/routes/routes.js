import {
  Home
} from '../components';

const HomeRoutes = [
  {
    path: '/',
    component: Home,
    auth: true,
    exact: true
  }
]

export {
  HomeRoutes
}