import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CustomerList.css';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCustomers } from '../store/customer/action';

class CustomerList extends Component {
    
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getCustomers())
    }

    render() {
        const { customers } = this.props
        return (
            <div>
                <a href="/customer/add">
                    ADD NEW</a>
                <hr></hr>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link to={`customer/details/${item._id}`}>View</Link> |
                                        <Link to={`customer/edit/${item._id}`}>Edit</Link> |
                                        <Link to={`customer/delete/${item._id}`}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    let customers = [];
    if (state.customerReducer.customers !== undefined) {
        customers = state.customerReducer;
        return customers;
    } else {
        return { customers }
    }
}

export default connect(mapStateToProps)(CustomerList)
