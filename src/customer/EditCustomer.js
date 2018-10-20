import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const inputStyle = {
    mLeft: {
        marginLeft: '10px'
    }
};
class EditCustomerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            isSubmitted: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetch(`http://localhost:3200/customer/${this.props.match.params.id}`)
            .then(data => data.json())
            .then((data) => {
                this.setState({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    email: data.email
                })
            });
    }

    handleSubmit(event) {
        fetch(`http://localhost:3200/customer/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phone: this.state.phone,
                email: this.state.email
            })
        }).then(() => {
            this.setState({ isSubmitted: true });
        }).catch((error) => {
            console.log(error);
        });
        event.preventDefault();
    }
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        const isSubmitted = this.state.isSubmitted;
        if (isSubmitted) {
            return <Redirect push to="/" />
        }
        return (
            <div>
                <h2>Edit Customer</h2>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    First Name:<br />
                    <input type="text" value={this.state.firstName}
                        onChange={(e) => this.setState({ firstName: e.target.value })}
                        id="firstName" className="inputWidth" />
                    <br /> Last Name:<br />
                    <input type="text" value={this.state.lastName}
                        onChange={(e) => this.setState({ lastName: e.target.value })}
                        id="lastName" className="inputWidth" />
                    <br /> Phone Number:<br />
                    <input type="text" value={this.state.phone}
                        onChange={(e) => this.setState({ phone: e.target.value })}
                        id="phone" className="inputWidth" />
                    <br /> Email Address:<br />
                    <input type="text" value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        id="email" className="inputWidth" />
                    <br /><br />
                    <input type="button" value="Cancel" onClick={() => this.nextPath('/')} />
                    <input type="submit" style={inputStyle.mLeft} value="Submit" />
                </form>
            </div>
        );
    }
}
export default EditCustomerComponent