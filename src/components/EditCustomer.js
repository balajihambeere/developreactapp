import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCustomerById, updateCustomer } from '../store/customer/action';
import PropTypes from 'prop-types'


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
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getCustomerById(this.props.match.params.id))
    }

    handleSubmit(event, customer) {
        const { dispatch } = this.props;
        dispatch(updateCustomer(this.props.match.params.id, customer));
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
                <h2>Edit Customer</h2>
                <hr />
                <form onSubmit={(e) => this.handleSubmit(e, customer)}>
                    First Name:<br />
                    <input type="text" defaultValue={customer.firstName}
                        onChange={(e) => { customer.firstName = e.target.value }}
                        id="firstName" className="inputWidth" />
                    <br /> Last Name:<br />
                    <input type="text" defaultValue={customer.lastName}
                        onChange={(e) => { customer.lastName = e.target.value }}
                        id="lastName" className="inputWidth" />
                    <br /> Phone Number:<br />
                    <input type="text" defaultValue={customer.phone}
                        onChange={(e) => { customer.phone = e.target.value }}
                        id="phone" className="inputWidth" />
                    <br /> Email Address:<br />
                    <input type="text" defaultValue={customer.email}
                        onChange={(e) => { customer.email = e.target.value }}
                        id="email" className="inputWidth" />
                    <br /><br />
                    <input type="button" value="Cancel" onClick={() => this.nextPath('/')} />
                    <input type="submit" style={inputStyle.mLeft} value="Submit" />
                </form>
            </div>
        );
    }
}


EditCustomerComponent.propTypes = {
    customer: PropTypes.object.isRequired,
    isSubmitted: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
    const { customer, isSubmitted } = state.customerReducer.customer !== undefined
        ? state.customerReducer : { customer: {}, isSubmitted: false }
    return { customer, isSubmitted }
}

export default connect(mapStateToProps)(EditCustomerComponent)