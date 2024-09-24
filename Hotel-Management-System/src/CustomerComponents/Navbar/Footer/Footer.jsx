import React from 'react';
import { NavLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <>
      <div style={{ width: '100%', paddingTop: 30,textDecoration:'bold' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            background: 'url(https://image-tc.galaxy.tf/wijpeg-2c20hwoh1wlii0kzxwanek8gq/room-4-a-junior-suite-c-bedroom_wide.jpg?crop=0%2C188%2C2000%2C1125)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: 'auto',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(220, 210, 210, 0.3)',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingTop: 50,
                gap: '20px',
              }}
            >
              <div style={{ color: 'black', padding: 10, maxWidth: 300 }}>
                <h3>Hotel Management System</h3>
                <p>
                  Indulge in a world of luxury and comfort with our exclusive
                  selection of rooms. Whether you’re seeking elegance, relaxation,
                  or modern amenities, our unique rooms are designed to provide the
                  ultimate stay experience.
                </p>
              </div>

              
              <div style={{ color: 'black'}}>
                <h3>Quick Links</h3>
                <ul style={{ padding: 0, listStyle: 'none' }}>
                  <li>
                    <NavLink
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        padding: '5px 0',
                      }}
                     
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        padding: '5px 0',
                      }}
                      
                    >
                      Report
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        padding: '5px 0',
                      }}
                      
                    >
                      Rooms
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        padding: '5px 0',
                      }}
                      
                    >
                      User
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div style={{ color: 'black'}}>
                <h3>Contact Us</h3>
                <p>abcdef@gmail.com</p>
                <p>031234567</p>

                <div>
                <ul style={{ padding: 0, listStyle: 'none', display: 'flex', gap: '10px' }}>
                  <li>
                    <NavLink
                      style={{ color: 'black', textDecoration: 'none' }}
                      to="#"
                    >
                      <InstagramIcon />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={{ color: 'black', textDecoration: 'none' }}
                      to="#"
                    >
                      <FacebookIcon />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={{ color: 'black', textDecoration: 'none' }}
                      to="#"
                    >
                      <EmailIcon />
                    </NavLink>
                  </li>
                </ul>
              </div>
              </div>


              
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styling */}
      <style>
        {`
          @media (max-width: 768px) {
            div {
              text-align: center;
            }
            div ul {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;
