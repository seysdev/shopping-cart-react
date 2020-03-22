import { combineReducers } from 'redux';
import {
  AuthReducer,
  VideosReducer,
  PaymentReducer
} from '../features';

const allReducers = combineReducers({
  AuthReducer,
  VideosReducer,
  PaymentReducer
})

export {
  allReducers
}