import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CustomerList.css';

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3200/customers')
            .then(data => data.json())
            .then((data) => {
                this.setState({ customers: data })
            });
    }

    render() {
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
                            this.state.customers.map((item) => (
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
export default CustomerList