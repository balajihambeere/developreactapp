import React, { Component } from 'react';
class DeleteCustomerComponent extends Component {
    render() {
        return (
            <div className="navbar">
                <h1>Delete Customer</h1>
                <a href="/customers">Cancel</a>
            </div>
        );
    }
}
export default DeleteCustomerComponent