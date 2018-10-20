import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCustomerById } from '../store/customer/action';
import PropTypes from 'prop-types'

class CustomerDetailComponent extends Component {
    
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getCustomerById(this.props.match.params.id))
    }

    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        const { customer } = this.props
        return (
            <div>
                <h2>Customer Details</h2>
                <hr />
                {customer &&
                    <dl>
                        <dt>First Name : {customer.firstName}</dt>
                        <dt>Last Name : {customer.lastName}</dt>
                        <dt>Phone Number : {customer.phone}</dt>
                        <dt>Email Address: {customer.email}</dt>
                    </dl>
                }
                <input type="button" value="back" onClick={() => this.nextPath('/')} />
            </div>
        );
    }
}

CustomerDetailComponent.propTypes = {
    customer: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    let customer = {};
    if (state.customerReducer.customer !== undefined) {
        customer = state.customerReducer;
        return customer;
    } else {
        return { customer }
    }
}

export default connect(mapStateToProps)(CustomerDetailComponent)