import * as actionTypes from './actionTypes';

const customerReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CUSTOMER_FETCH_ALL_SUCCESS:
      return Object.assign({}, state, {
        customers: action.payload,
      });
    case actionTypes.CUSTOMER_FETCH_ONE_SUCCESS:
      return state.setIn(['byId', action.payload.id], action.payload);
    case actionTypes.CUSTOMER_CREATE_SUCCESS:
    case actionTypes.CUSTOMER_UPDATE_SUCCESS:
      return state.setIn(['byId', action.payload.id], action.payload);
    case actionTypes.CUSTOMER_DELETE_SUCCESS:
      return state.set('byId', state.byId.without(action.payload));
    default:
      return state;
  }
};
export default customerReducer;