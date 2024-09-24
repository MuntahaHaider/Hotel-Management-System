// import React from 'react'

// const StaffDashboard = () => {
//   return (
//     <div>StaffDashboard</div>
//   )
// }

// export default StaffDashboard


import React from 'react';
import { useNavigate } from 'react-router-dom';
import SatffNavbar from './Navbar';
// import MyNavbar from '../../../AdminComponents/Navbar/Navbar';
const StaffDashboard = () => {
    const navigate = useNavigate()

  return (
    <>
      <SatffNavbar />
      <div>
        <div
          style={{
            background:
              'url(https://www.shutterstock.com/image-photo/hotel-receptionist-uniforms-desk-lobby-260nw-2478291917.jpg)',
            height: 580,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Staff specific message */}
          <div
           style={{
            width: '90%',
            maxWidth: 400,
            marginLeft: 40,
            // marginRight: 'auto',
            fontFamily: 'sans-serif',
            padding: 20,
            borderRadius: 10,
            color: 'white',
            background: 'rgba(0,0,0,0.7)',
            position: 'relative',
            top: '20%',
            textAlign: 'center',
          }}
          >
          <h3 style={{ fontSize: '1.5rem' }}>Staff Dashboard</h3>
          <p style={{ fontSize: '1rem' }}>
              As a member of the hotel staff, you play a vital role in ensuring smooth operations 
              and excellent guest experiences. Manage your daily tasks, assist customers, and 
              coordinate with other departments to maintain high service standards. 
              Keep track of assignments and maintain top-quality service throughout the hotel.

            </p>
            <button
              style={{
                marginTop: 20,
                padding: '10px 20px',
                borderRadius: 5,
                backgroundColor: '#ff9800',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              onClick={()=>navigate('/StaffRegister')}
            >
              Register Staff
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffDashboard;
