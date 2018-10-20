import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCustomerById, deleteCustomer } from '../store/customer/action';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class DeleteCustomerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getCustomerById(this.props.match.params.id))
    }

    handleSubmit(event) {
        const { dispatch } = this.props
        dispatch(deleteCustomer(this.props.match.params.id));
        event.preventDefault();
    }
    nextPath(path) {
        this.props.history.push(path);
    }
    ok() {
        this.setState({ redirectToReferrer: true });
    }
    render() {
        const { customer, redirectTo } = this.props
        if (redirectTo) {
            return <Redirect push to="/" />
        }
        return (
            <div>
                <h2>You want to delete this Customer
                <form onSubmit={this.handleSubmit} >
                        <input className="buttonWidth" type="button" value="NO" onClick={() => this.nextPath('/')} />
                        <input className="buttonWidth marginLeft10" type="submit" value="YES" />
                    </form>
                </h2>
                <hr />
                {
                    customer &&
                    <dl>
                        <dt>First Name : {customer.firstName}</dt>
                        <dt>Last Name : {customer.lastName}</dt>
                        <dt>Phone Number : {customer.phone}</dt>
                        <dt>Email Address : {customer.email}</dt>
                    </dl>
                }
            </div>
        );
    }
}

DeleteCustomerComponent.propTypes = {
    customer: PropTypes.object.isRequired,
    redirectTo: PropTypes.bool,
    message: PropTypes.string,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const { customer, redirectTo, message } =
        state.customerReducer.customer !== undefined ? state.customerReducer : { customer: {}, redirectTo: false, message: "" }


    return {
        customer, redirectTo, message
    }
}

export default connect(mapStateToProps)(DeleteCustomerComponent)