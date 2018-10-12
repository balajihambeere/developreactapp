import React, { Component } from 'react';
const inputStyle = {
    mLeft: {
        marginLeft: '10px'
    }
};
class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        fetch('http://localhost:3200/customer', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.refs.firstName.value,
                lastName: this.refs.lastName.value,
                phone: this.refs.phone.value,
                email: this.refs.email.value
            })
        }).then(function () {
        }).catch(function (error) {
            console.log(error);
        });
        event.preventDefault();
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <h2>Create new Customer</h2>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    First Name:<br />
                    <input type="text" ref="firstName" className="inputWidth" />
                    <br /> Last Name:<br />
                    <input type="text" ref="lastName" className="inputWidth" />
                    <br /> Phone Number:<br />
                    <input type="text" ref="phone" className="inputWidth" />
                    <br /> Email Address:<br />
                    <input type="text" ref="email" className="inputWidth" />
                    <br /><br />
                    <input type="button" value="Cancel" onClick={() => this.nextPath('/')} />
                    <input type="submit" style={inputStyle.mLeft} value="Submit" />
                </form>
            </div>
        );
    }
}
export default CreateCustomerComponent