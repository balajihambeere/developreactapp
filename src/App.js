import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

import './App.css';
import CustomerList from './components/CustomerList';
import CreateCustomerComponent from './components/CreateCustomer';
import CustomerDetailComponent from './components/CustomerDetails';
import DeleteCustomerComponent from './components/DeleteCustomer';
import EditCustomerComponent from './components/EditCustomer';

const location = window;

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <div className="navbar">
              <a href="/">React Application</a>
              <a href="/">Home</a>
            </div>
            <div className="main">
              <Switch >
                <Route exact path="/" render={(props) => (
                  <CustomerList key={location.pathname} />
                )} />
                <Route exact path="/customer/add" component={CreateCustomerComponent} key={location.pathname} />
                <Route exact path="/customer/details/:id" component={CustomerDetailComponent} key={location.pathname} />
                <Route exact path="/customer/edit/:id" component={EditCustomerComponent} key={location.pathname} />
                <Route exact path="/customer/delete/:id" component={DeleteCustomerComponent} key={location.pathname} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
