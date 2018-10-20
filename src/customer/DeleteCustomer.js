import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class DeleteCustomerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldHide: true,
            message: '',
            customer: null,
            redirectToReferrer: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetch(`http://localhost:3200/customer/${this.props.match.params.id}`)
            .then(data => data.json())
            .then((data) => {
                this.setState({ customer: data })
            });
    }

    handleSubmit(event) {
        fetch(`http://localhost:3200/customer/${this.props.match.params.id}`, {
            method: 'DELETE'
        }).then(() => {
            this.setState({ message: "customer delete successfully" });
            this.setState({ shouldHide: false });
        }).catch((error) => {
            console.log(error);
        });
        event.preventDefault();
    }
    nextPath(path) {
        this.props.history.push(path);
    }
    ok() {
        this.setState({ redirectToReferrer: true });
    }
    render() {
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer) {
            return <Redirect push to="/" />
        }
        return (
            <div>
                <h2 className={this.state.shouldHide ? '' : 'hidden'}>You want to delete this Customer
                <form onSubmit={this.handleSubmit} >
                        <input className="buttonWidth" type="button" value="NO" onClick={() => this.nextPath('/')} />
                        <input className="buttonWidth marginLeft10" type="submit" value="YES" />
                    </form>
                </h2>
                <h2 className={this.state.shouldHide ? 'hidden' : ''}>{this.state.message}
                    <input className="buttonWidth marginLeft10" type="button" value="OK" onClick={() => this.ok()} />
                </h2>
                <hr />
                {this.state && this.state.customer &&
                    <dl className={this.state.shouldHide ? '' : 'hidden'}>
                        <dt>First Name : {this.state.customer.firstName}</dt>
                        <dt>Last Name : {this.state.customer.lastName}</dt>
                        <dt>PhoneNumber : {this.state.customer.phone}</dt>
                        <dt>Email Address: {this.state.customer.email}</dt>
                    </dl>
                }
            </div>
        );
    }
}
export default DeleteCustomerComponent