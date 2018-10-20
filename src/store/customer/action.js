import * as actionTypes from './actionTypes';
import axios from 'axios';

export function getCustomers() {
    return function (dispatch) {
        return axios.get(`http://localhost:3200/customers/`)
            .then((res) => {
                dispatch({ type: actionTypes.CUSTOMER_FETCH_ALL_SUCCESS, payload: res.data });
            })
    };
};

export function getCustomerById(id) {
    return function (dispatch) {
        return axios.get(`http://localhost:3200/customer/${id}`)
            .then((res) => {
                dispatch({ type: actionTypes.CUSTOMER_FETCH_ONE_SUCCESS, payload: res.data });
            })
    };
};

export function createCustomer(customer) {
    return function (dispatch) {
      return axios.post(`http://localhost:3200/customer`, customer)
        .then((res) => {
          dispatch({type: actionTypes.CUSTOMER_CREATE_SUCCESS, payload: res.data});
        })
    };
};
  
export function updateCustomer(id, customer) {
    return function (dispatch) {
      return axios.put(`http://localhost:3200/customer/${id}`, customer)
        .then((res) => {
          dispatch({type: actionTypes.CUSTOMER_UPDATE_SUCCESS, payload: res.data});
        })
    };
};
  
export function deleteCustomer(id) {
    return function (dispatch) {
      return axios.delete(`http://localhost:3200/customer/${id}`)
        .then((res) => {
          dispatch({type: actionTypes.CUSTOMER_DELETE_SUCCESS, payload: res.data});
        })
    };
};