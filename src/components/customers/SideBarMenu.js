import React from 'react';
import { Nav, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from "react-native-vector-icons/FontAwesome";

import bg from '../../assets/images/bg/bg_1.jpg'

// import './SideBarStyle.css';
import './sideBar.css';

 const SideBarMenu = () => {

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  // }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";
  // }

  return (
    <Col xs={12} md={2} className="d-none d-md-block p-0">
      <nav id="sidebar" className="img sidebar" style={{backgroundImage: `url(${bg})`}}>
        <div className="p-4">
          <h1><span class="logo">Williams <span>Last Login: 2 Days Ago</span></span></h1>
          <ul className="list-unstyled components mb-5">
            <li>
              <Link to="/users"><Icon name="dashboard" size={15} color="white" /> <span className="ml-3">Dashboard</span></Link>
            </li>
            <li>
              <Link to="/users"><Icon name="arrow-circle-right" size={15} color="white" /> <span className="ml-3"> Fund Wallet</span></Link>
            </li>
            <li>
              <Link to="/users"><Icon name="transgender-alt" size={15} color="white" /> <span className="ml-3">Transactions</span></Link>
            </li>
            <li>
              <Link to="/users"><Icon name="user-circle" size={15} color="white" /> <span className="ml-3">Profile</span></Link>
            </li>
            <li>
              <Link to="/users"><Icon name="address-book" size={15} color="white" /> <span className="ml-3">Beneficiaries</span></Link>
            </li>
            <li>
              <Link to="/users"><Icon name="dashboard" size={15} color="white" /> <span className="ml-3">Topup History</span></Link>
            </li>
            
            <li className="mt-4">
              <Link to="/users"><Icon name="phone-square" size={15} color="white" /> <span className="ml-3">Buy Airtime</span></Link>
            </li>
            <li>
              <Link to="/users"><Icon name="globe" size={15} color="white" /> <span className="ml-3">Buy Data</span></Link>
            </li>
            <li>
              <Link to="/users"><Icon name="power-off" size={15} color="white" /> <span className="ml-3">Pay Power Bill</span></Link>
            </li>
            <li>
              <Link to="/users"><Icon name="tv" size={15} color="white" /> <span className="ml-3">Cable TV</span></Link>
            </li>
            <li>
              <Link to="/users"><Icon name="plane" size={15} color="white" /> <span className="ml-3">Buy Ticket</span></Link>
            </li>
          </ul>
          <div class="mb-5">
						<h3 class="h6 mb-3">Subscribe for newsletter</h3>
						<form action="#" class="subscribe-form">
	            <div class="form-group d-flex text-white">
	            	<div class="icon"><span class="icon-paper-plane"></span></div>
	              <input type="text" class="form-control text-white" placeholder="Enter Email Address"/>
	            </div>
	          </form>
					</div>

	        <div class="footer">
	        	<p className="text-white">
						  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved yabapay.com
						</p>
	        </div>
          {/* <Nav defaultActiveKey="/home" className="flex-column">
            <div className="d-flex pl-3 mb-3">
              <Icon name="user-circle" size={35} color="black" className="d-none d-md-none" />
              <h6 className="ml-3" style={{color: 'rgb(255, 128, 0)'}}>Tunmi Williams <br/> <small>Last Login: 2 Days Ago </small></h6>
            </div>
            
            <Nav.Link as={Link} to="/users" ><Icon name="dashboard" size={15} color="black" /> Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/users/fund-wallet"><Icon name="arrow-circle-right" size={15} color="black" /> Fund Wallet</Nav.Link>
            <Nav.Link as={Link} to="/users/transactions"><Icon name="transgender-alt" size={15} color="black" /> Transactions</Nav.Link>
            <Nav.Link as={Link} to="/users/profile"><Icon name="user-circle" size={15} color="black" /> Profile</Nav.Link>
            <Nav.Link as={Link} to="/users/beneficiaries"><Icon name="address-book" size={15} color="black" /> Beneficiaries</Nav.Link>
            <Nav.Link as={Link} to="/users/topup-history"><Icon name="address-book" size={15} color="black" /> Topup History</Nav.Link>
            <hr/>
            <h6 className="ml-3 text-dark">Services</h6>
            <Nav.Link as={Link} to="/users/airtime" eventKey="link-2"><Icon name="phone-square" size={15} color="black" /> Buy Airtime</Nav.Link>
            <Nav.Link as={Link} to="/users/data" eventKey="link-1"><Icon name="globe" size={15} color="black" /> Buy Data</Nav.Link>
            <Nav.Link as={Link} to="/users/power"><Icon name="power-off" size={15} color="black" /> Pay Power Bill</Nav.Link>
            <Nav.Link as={Link} to="/users/cable"><Icon name="tv" size={15} color="black" /> Cable TV</Nav.Link>
            <Nav.Link as={Link} to="/users/"><Icon name="plane" size={15} color="black" /> Buy Ticket</Nav.Link>
          </Nav> */}
        </div>
      </nav>
    </Col>
  )
}

export default SideBarMenu;