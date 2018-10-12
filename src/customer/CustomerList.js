import React from 'react';
import './CustomerList.css';

const STYLE = {
    mTop: {
        marginTop: '50px'
    },
    mLeft: {
        marginLeft: '10px'
    },
};
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
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
};



// class CustomerListComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { customers: [] };
//     }
//     componentDidMount() {
//         fetch('http://localhost:3200/customers')
//             .then(data => data.json())
//             .then((data) => { this.setState({ customers: data }) });
//     }
//     render() {
//         return (
//             <div className="navbar">
//                 getTableContent(this.state.customers)
//             </div>
//         );
//     }
// }
export default Home