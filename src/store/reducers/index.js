import { combineReducers } from 'redux';

import productItems from './productList';

const rootReducers = combineReducers({
  product: productItems
})

export default rootReducers;