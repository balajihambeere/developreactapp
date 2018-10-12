import React from 'react';
import { Link } from 'react-router-dom';
import './CustomerList.css';

const Home = (props) => {
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
                        props.customers.map((item) => (
                            <tr key={item._id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Link to={`customer/details/${item._id}`}>View</Link> |
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};
export default Home