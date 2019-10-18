import { createStore } from 'redux';

import reducer from './mudules/cart/reducer';

const store = createStore(reducer);

export default store;
