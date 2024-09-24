import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink, useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { auth, database } from '../../Config/firebase';
import { signOut } from 'firebase/auth';

function AdimNavbar() {
  const [bookingArray, setBookingArray] = useState([]);
  const navigate = useNavigate();

  // Function to fetch payment data from Firestore
  const getPaymentData = async () => {
    try {
      const roomBookCollection = collection(database, 'RoomBooking');
      const BookingtData = await getDocs(roomBookCollection);
      const BookingListt = BookingtData.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setBookingArray(BookingListt);
    } catch (error) {
      console.error('Error fetching Booking data:', error);
    }
  };

  useEffect(() => {
    getPaymentData();
  }, []);

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
        console.error('Sign-out error:', error);
      });
  };

  return (
    <Navbar expand="lg" className="p-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/adminDashboard" style={{ textDecoration: 'none', color: 'black' }}>
          Admin Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ps-3">
            <NavLink
              to='/adminDashboard'
              style={{ 
                textDecoration: 'none',
                color:'black',
                padding: '10px'
              }}
            >
              Home
            </NavLink>

            <NavDropdown title="Hotel Detail" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/roomBookingDetail' style={{ color: 'black', textDecoration: 'none' }}>
                Room Booking Detail
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/paymentDetail' style={{ color: 'black', textDecoration: 'none' }}>
                Payment Detail
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/staffDetail' style={{ color: 'black', textDecoration: 'none' }}>
                Staff Detail
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink
              to="/customerBookingDetail"
              style={{ textDecoration: 'none', color: 'black', padding: 10 }}
            >
              <Badge badgeContent={bookingArray.length}>
                Customer Booking<AddShoppingCartIcon />
              </Badge>
            </NavLink>

            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleSignout}>User Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdimNavbar;
