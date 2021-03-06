import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import createRequisition from './Components/createRequisition';
import Home from './Components/Home';
import Inventory from './Components/Inventory';
import supervisorHome from './Components/SupervisorHome';
import SiteManagerHome from './Components/SiteManagerHome';
import Location from './Components/Location';
import AuthzEmployeeHome from "./Components/AuthzEmployeeHome";
import SupplierHome from "./Components/SupplierHome";
import RequisitionDetails from './Components/RequisitionDetails';
import Login from './Components/Login';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Register from "./Components/Register";
import CreatePurchaceOrder from './Components/CreatePurchaceOrder';
import PurchaseOrderDetails from './Components/purchaseOrderDetails';
import ViewPurchaseOrder from './Components/ViewPurchaseOrder';
import AddSupplier from './Components/AddSupplier';
import SupplierDetails from './Components/SupplierDetails';
import ViewRequisitions from './Components/ViewRequisitions';
import PendingRequisitions from './Components/PendingRequisitions';
import DeclineRequisitions from './Components/DeclineRequisitions';
import ApprovedAll from './Components/ApprovedAll';
import UpdateRequisition from './Components/UpdateRequisition';
import ViewSupplierList from './Components/ViewSupplierList';
import SendSupplier from './Components/SendSupplier';
import SendAll from './Components/SendAll';
import logo from './Images/logo.png';
import './App.css';

const background = {
  //  background: "linear-gradient(to top right, #9999ff 0%, #ffcc99 104%)",
  //    background: "linear-gradient(to bottom right, #cccc00 0%, #ffffcc 100%)",
    background: "white",
};

const backgroundNav = {
    background: "linear-gradient(to bottom, #ffffff 0%, #ffff99 100%)",
};


class App extends Component {

    render() {
        return (
            <section style={ background }>
                <Router>
                    <section style={ background }>
                        <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-light btn-group-lg bg-transparent justify-content-between">
                                <Link to={'/Home'} className="navbar-brand"><img src={logo} alt="logo" width="100px"/></Link>
                                <div className="" id="navbarSupportContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <Link to={'/Home'} className="nav-link">HOME</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/Services'} className="nav-link">SERVICES</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/Location'} className="nav-link">LOCATIONS</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/'} className="nav-link">CONTACTUS</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/AboutUs'} className="nav-link">ABOUTUS</Link>
                                        </li>
                                    </ul>
                                </div>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control rgba-mdb-color-light mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    <Link to={'/Login'}>< button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Login</button></Link>
                                {/* <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button> */}
                                </form>
                            </nav>
                        </div>
                    </section>

                        <Switch>
                            <Route exact path='/createRequisition' component={createRequisition}/>
                            <Route exact path='/Home' component={Home}/>
                            <Route exact path='/Inventory' component={Inventory}/>
                            <Route exact path='/supervisorHome' component={supervisorHome}/>
                            <Route exact path='/SiteManagerHome' component={SiteManagerHome}/>
                            <Route exact path='/Location' component={Location}/>
                            <Route exact path='/AuthzEmployeeHome' component={AuthzEmployeeHome}/>
                            <Route exact path='/SupplierHome' component={SupplierHome}/>
                            <Route exact path='/Login' component={Login}/>
                            <Route exact path='/RequisitionDetails' component={RequisitionDetails}/>
                            <Route exact path='/Services' component={Services}/>
                            <Route exact path='/AboutUs' component={AboutUs}/>
                            <Route exact path='/Register' component={Register}/>
                            <Route exact path='/CreatePurchaceOrder' component={CreatePurchaceOrder}/>
                            <Route exact path='/PurchaseOrderDetails' component={PurchaseOrderDetails}/>
                            <Route exact path='/ViewPurchaseOrder' component={ViewPurchaseOrder}/>
                            <Route exact path='/AddSupplier' component={AddSupplier}/>
                            <Route exact path='/SupplierDetails' component={SupplierDetails}/>
                            <Route exact path='/ViewRequisitions' component={ViewRequisitions}/>
                            <Route exact path='/PendingRequisitions' component={PendingRequisitions}/>
                            <Route exact path='/DeclineRequisitions' component={DeclineRequisitions}/>
                            <Route exact path='/ApprovedAll' component={ApprovedAll}/>
                            <Route exact path='/UpdateRequisition' component={UpdateRequisition}/>
                            <Route exact path='/ViewSupplierList' component={ViewSupplierList}/>
                            <Route exact path='/SendSupplier' component={SendSupplier}/>
                            <Route exact path='/SendAll' component={SendAll}/>
                        </Switch>
                        
                </Router>
                <footer style={ background }>
                    <div className="main">
                        <nav className="navbar navbar-expand-lg navbar-light btn-group-lg bg-transparent">
                            <div className="navbar-brand">
                                <div className="collapse navbar-collapse" id="navbarSupportContent">
                                    <h5>CopyRight @ SriLanka Construction coperation 2021</h5>
                                </div>
                            </div>
                        </nav>
                    </div>

                </footer>
            </section>
        )
    }
    
}
export default App;


