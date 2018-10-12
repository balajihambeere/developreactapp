import React, { Component } from 'react';

const inputStyle = {
    mLeft: {
        marginLeft: '10px'
    }
};
class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '', phone: '', email: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState(
            {
                firstName: event.target.firstName,
                lastName: event.target.lastName,
                phone: event.target.phone,
                email: event.target.email
            });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.firstName + + this.state.phone);
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
                    <input type="text" value={this.state.firstName} onChange={this.handleChange} className="inputWidth" />
                    <br /> Last Name:<br />
                    <input type="text" value={this.state.lastName} onChange={this.handleChange} className="inputWidth" />
                    <br /> Phone Number:<br />
                    <input type="text" value={this.state.phone} onChange={this.handleChange} className="inputWidth" />
                    <br /> Email Address:<br />
                    <input type="text" value={this.state.email} onChange={this.handleChange} className="inputWidth" />
                    <br /><br />
                    <input type="button" value="Cancel" onClick={() => this.nextPath('/')} />
                    <input type="submit" style={inputStyle.mLeft} value="Submit" />
                </form>
            </div>
        );
    }
}
export default CreateCustomerComponent