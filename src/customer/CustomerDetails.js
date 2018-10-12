import React, { Component } from 'react';

class CustomerDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: null
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3200/customer/${this.props.match.params.id}`)
            .then(data => data.json())
            .then((data) => {
                this.setState({ customer: data })
            });
    }
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <div>
                <h2>Customer Details</h2>
                <hr />
                {this.state && this.state.customer &&
                    <dl>
                        <dt>First Name : {this.state.customer.firstName}</dt>
                        <dt>Last Name : {this.state.customer.lastName}</dt>
                        <dt>PhoneNumber : {this.state.customer.phone}</dt>
                        <dt>Email Address: {this.state.customer.email}</dt>
                    </dl>
                }
                <input type="button" value="back" onClick={() => this.nextPath('/')} />
            </div>
        );
    }
}
export default CustomerDetailComponent