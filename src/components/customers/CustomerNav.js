import React from 'react';
import { Nav, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from "react-native-vector-icons/FontAwesome";
import './customernav.css'

import card from '../../assets/images/card.svg'

const CustomerNav = () => {
  return (
    <div className="sidebar bg-primary p-4">
      <div className="header">
        <img src={card} alt="pay with card" width="100"/>
      </div>
      <div>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link as={Link} to="/users" eventKey="link-2"><Icon name="home" size={15} color="white" /> Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/users/fund-wallet" eventKey="link-2"><Icon name="arrow-circle-right" size={15} color="white" /> Fund Wallet</Nav.Link>
          <Nav.Link as={Link} to="/users/transactions" eventKey="link-2"><Icon name="transgender-alt" size={15} color="white" /> Transactions</Nav.Link>
          <Nav.Link as={Link} to="/users/profile" eventKey="link-2"><Icon name="user-circle" size={15} color="white" /> Profile</Nav.Link>
          <Nav.Link as={Link} to="/users/beneficiaries" eventKey="link-2"><Icon name="address-book" size={15} color="white" /> Beneficiaries</Nav.Link>
          <Nav.Link as={Link} to="/users/topup-history" eventKey="link-2"><Icon name="address-book" size={15} color="white" /> Topup History</Nav.Link>
        </Nav>

        <Nav defaultActiveKey="/home" className="flex-column mt-5">
          <Nav.Link as={Link} to="/" eventKey="link-2"><Icon name="lock" size={15} color="white" /> Signout</Nav.Link>
        </Nav>
      </div>
      <div>
        <div className="footer mt-5 text-center">
          <small className="text-white">
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> yabapay.com
          </small>
        </div>
      </div>
    </div>
  )
}

export default CustomerNav;