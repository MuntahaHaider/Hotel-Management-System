// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import {  NavLink, useNavigate } from 'react-router-dom';
// import { Badge } from '@mui/material';
// import { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { auth, database } from '../../Config/firebase';
// import { signOut } from 'firebase/auth';

// function CustomerNavbar() {
//   const [bookingArray, setBookingArray] = useState([]);
//   const navigate = useNavigate()
//   // Function to fetch payment data from Firestore
//   const getPaymentData = async () => {
//     try {
//       const roomBookCollection = collection(database, 'RoomBooking'); // Ensure the collection name is correct
//       const BookingtData = await getDocs(roomBookCollection);
//       const BookingListt = BookingtData.docs.map(doc => ({ ...doc.data(), id: doc.id }));

//       console.log('Fetched Booking:', BookingListt); // Debug: Check if the payment data is being fetched correctly
//       setBookingArray(BookingListt);
//     } catch (error) {
//       console.error('Error fetching Booking data:', error);
//     }
//   };

//   // Fetch payment data when the component mounts
//   useEffect(() => {
//     getPaymentData();
//   }, []);

//   console.log('Payment Array Length:', bookingArray.length); // Debug: Check the length of the paymentArray


// const handleSignout = (e)=>{
//   e.preventDefault();
//    // const auth = getAuth();
//    signOut(auth)
//    .then(() => {
//     localStorage.clear('UserID')
//   alert('user signOut.....')
//   navigate('/loginAs')
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
//   };


//   return (
//     <Navbar expand="lg p-3">
//       <Container>
//         <Navbar.Brand href="/customerDashboard">Customer Dashboard</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto ps-3">
//             <Nav.Link href="/customerDashboard">Home</Nav.Link>

//             <NavLink style={{ color: 'black', padding: 10 }} to="/addRoom">
//               <Badge badgeContent={bookingArray.length}>
//                 <AddShoppingCartIcon />
//               </Badge>
//             </NavLink>

//             <NavDropdown title="User" id="basic-nav-dropdown">
//               <NavDropdown.Item onClick={handleSignout}>User Logout</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomerNavbar;













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

function CustomerNavbar() {
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
        console.error('Error signing out:', error);
      });
  };

  return (
    <Navbar expand="lg" className="p-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/customerDashboard" style={{ textDecoration: 'none', color: 'black' }}>
          Customer Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ps-3">
            <NavLink
              to="/customerDashboard"
              style={{
                textDecoration: 'none',
                color:'black',
                padding: '10px'
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/addRoom"
              style={{ textDecoration: 'none', color: 'black', padding: 10 }}
            >
              <Badge badgeContent={bookingArray.length}>
                <AddShoppingCartIcon />
              </Badge>
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

export default CustomerNavbar;
