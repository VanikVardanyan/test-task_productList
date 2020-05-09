import { createStore } from 'redux';
import rootReducers from './reducers'

const initialState = {};

const store = createStore(rootReducers,initialState);

export default store;