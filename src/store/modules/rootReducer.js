import { combineReducers } from 'redux';

import cart from './cart/reducer';
import formulario from './formulario/reducer';

export default combineReducers({
    cart, formulario
})
