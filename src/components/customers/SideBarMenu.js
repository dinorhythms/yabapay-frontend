import React from 'react';
import { Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    <Col xs={12} md={2} className="pl-0 SideNav d-none d-sm-block">
      <div id="mySidenav">
        <Nav defaultActiveKey="/home" className="flex-column">
          <h6 className="ml-3 text-warning">Tunmi Williams <br/> <small>Last Login: 2 Days Ago </small></h6>
          <Nav.Link as={Link} to="/users" >Dashboard</Nav.Link>
          <Nav.Link eventKey="link-2">Fund Wallet</Nav.Link>
          <Nav.Link as={Link} to="/users/transactions">Transactions</Nav.Link>
          <Nav.Link eventKey="link-1">Profile</Nav.Link>
          <hr/>
          <h6 className="ml-3 text-warning">Services</h6>
          <Nav.Link as={Link} to="/users/airtime" eventKey="link-2">Buy Airtime</Nav.Link>
          <Nav.Link eventKey="link-1">Buy Data</Nav.Link>
          <Nav.Link href="/home">Pay Power Bill</Nav.Link>
          <Nav.Link eventKey="link-2">Cable TV</Nav.Link>
          <Nav.Link href="/home">Buy Ticket</Nav.Link>
        </Nav>
      </div>
    </Col>
  )
}

export default SideBarMenu;