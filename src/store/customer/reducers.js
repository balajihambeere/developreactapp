import * as actionTypes from './actionTypes';

const customerReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CUSTOMER_FETCH_ALL_SUCCESS:
      return Object.assign({}, state, {
        customers: action.payload,
      });
    case actionTypes.CUSTOMER_FETCH_ONE_SUCCESS:
      return Object.assign({}, state, {
        isSubmitted:false,
        customer: action.payload,
      });
    case actionTypes.CUSTOMER_CREATE_SUCCESS:
      return Object.assign({}, state, {
        isSubmitted:true
      });
    case actionTypes.CUSTOMER_UPDATE_SUCCESS:
      return state.setIn(['byId', action.payload.id], action.payload);
    case actionTypes.CUSTOMER_DELETE_SUCCESS:
      return Object.assign({}, state, {
        redirectTo: true,
        message: "Customer record deleted successfully",
        customer: action.payload,
      });
    default:
      return state;
  }
};
export default customerReducer;