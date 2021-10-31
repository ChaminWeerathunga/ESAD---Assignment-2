import React, {Component} from 'react';
import '../css/authzEmployee.css';
import {Link,NavLink} from "react-router-dom";
import auzEmployee from '../Images/employees.jpeg';
import axios from "axios";

const authzEmployee1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

const form ={
    width: "803px", /* Full width */
    height: "700",/* Full height */
    position:"center",
    border: "opx black",
};

export default class DeclineRequisitions extends Component{
    state={
        requisitions:[],
    };

    componentDidMount(){
        axios.get('http://localhost:3003/requisitions/isDecline')
            .then(res =>{
                console.log(res)
                this.setState({requisitions:res.data})
            })

    }

    render(){
        return(
            <div>
               <div className="sidenav" id="auzEmp">
                    <section style={ authzEmployee1 }>
                        <img src={auzEmployee} width="100%" height="160px"/>
                        <h6 className="text-center">Employee</h6>
                    </section>
                    <ul className="side-nav-menu">
                        <li><NavLink to={'/SiteManagerHome'}>HOME</NavLink></li>
                        <li><NavLink to={'/ViewRequisitions'}>SHOW REQUISIONS</NavLink></li>
                        <li><NavLink to={'/createRequisition'}>CREATE RQUISITIONS</NavLink></li>
                        <li><NavLink to={'/DeclineRequisitions'}>DISAPPROVED REQUISIONS</NavLink></li>
                    </ul>
                    <div className="p-3">
                        <Link to={'/Home'} className="btn btn-outline-danger btn-sm col-sm-20 align-content-md-center">LOG OUT </Link>
                    </div>
                </div>

                    <div className="main">
                           
                             <div className="col-sm-20 align-content-md-center">
                                <form onSubmit={this.onSubmit}>
                                <div className="container">
                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>DISAPPROVED REQUISITION LISTS</b></h2></div>
                                        </label>
                                        <div>
                                            <table border='2' cellSpacing='1' cellPadding='4'>
                                                <thead><tr>                       
                                                        <th>Site Name</th>
                                                        <th>Item Name</th>
                                                        <th>Type</th>
                                                        <th>Quantity</th>
                                                        <th>PerAgreed Price</th>
                                                        <th>PerApproved Supplier</th>
                                                        <th>Funding AccNo</th>
                                                        <th>Actions</th>
                                                    </tr></thead>
                                                    <tbody>{this.state.requisitions.map((q) =>
                                                    <tr>
                                                        <td>{q.siteName}</td>
                                                        <td>{q.itemName}</td>
                                                        <td>{q.type}</td>
                                                        <td>{q.quantity}</td>
                                                        <td>{q.perAgreedPrice}</td>
                                                        <td>{q.perApprovedSupplier}</td>
                                                        <td>{q.AccountNo}</td>
                                                        <td>DISAPPROVED</td>
                                                    </tr>)}</tbody>
                                                    </table>
                                        </div>
                                </div></form>
                         </div>
            </div>
            </div>

        )
    }
}
