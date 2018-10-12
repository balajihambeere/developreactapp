import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from '../customer/CustomerList';
import CreateCustomerComponent from '../customer/CreateCustomer';
import CustomerDetailComponent from '../customer/CustomerDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3200/customers')
      .then(data => data.json())
      .then((data) => {
        this.setState({ customers: data })
      });
  }

  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <a>Reactjs CRUD App</a>
            <a href="/customers">Home</a>
          </div>
          <div className="main">
            <Switch >
              <Route exact path="/customer/add" component={CreateCustomerComponent} />
              <Route exact path="/customer/details/:id" component={CustomerDetailComponent} />
              <Route exact path="/" render={(props) => (
                <Home customers={this.state.customers} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
