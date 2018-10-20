import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCustomerById, deleteCustomer } from '../store/customer/action';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class DeleteCustomerComponent extends Component {
    constructor(props) {
        super(props);
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

    render() {
        const { customer, isSubmitted } = this.props
        if (isSubmitted) {
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
    isSubmitted: PropTypes.bool,
    message: PropTypes.string,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const { customer, isSubmitted, message } =
        state.customerReducer.customer !== undefined ? state.customerReducer : { customer: {}, isSubmitted: false, message: "" }
    return {
        customer, isSubmitted, message
    }
}

export default connect(mapStateToProps)(DeleteCustomerComponent)