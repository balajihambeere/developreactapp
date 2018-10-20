import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import CustomerList from './customer/CustomerList';
import CreateCustomerComponent from './customer/CreateCustomer';
import CustomerDetailComponent from './customer/CustomerDetails';
import DeleteCustomerComponent from './customer/DeleteCustomer';
import EditCustomerComponent from './customer/EditCustomer';

const location = window;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="navbar">
            <a>React Application</a>
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
    );
  }
}

export default App;
