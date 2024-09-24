
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink, useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth } from '../Config/firebase';

function SatffNavbar() {
  const handleSignout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        localStorage.clear('UserID');
        localStorage.removeItem('userRole'); // Clear the user role

        alert('User signed out.');
        navigate('/loginAs');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <Navbar expand="lg" className="p-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/customerDashboard" style={{ textDecoration: 'none', color: 'black' }}>
          Staff Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ps-3">
            <NavLink
              to="/staffDashboard"
              style={{
                textDecoration: 'none',
                color:'black',
                padding: '10px'
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/StaffRegister"
              style={{
                textDecoration: 'none',
                color:'black',
                padding: '10px'
              }}
            >
              Register
            </NavLink>
             
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleSignout}>User Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SatffNavbar;
