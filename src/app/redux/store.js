import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

let store = null;

export default (initialState = {}) => {

  store = createStore(
    rootReducer,
    initialState,
  );

  return store;
}

export const getDispatch = () => store.dispatch();
export const getStore = () => store.getState();