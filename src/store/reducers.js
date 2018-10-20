import { combineReducers } from 'redux';

import customerReducer from './customer/reducers';

const rootReducer =  combineReducers({
    customerReducer
});
  
export default rootReducer