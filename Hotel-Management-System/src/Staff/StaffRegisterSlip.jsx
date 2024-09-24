import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StaffRegisteredSlip = () => {
  const location = useLocation();
  const {staffObj} = location.state
  console.log( staffObj )
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/staffDashboard'); // Replace with your dashboard route
  };

  return (
    <div>
      <div style={{ backgroundImage: 'url(https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.webp?h=662a4f7c&itok=7Laa3LkQ)', height: 585, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
       
        <Box>
          <div style={{
            margin: 'auto',
            maxWidth: 600,
            background: 'rgba(220, 210, 210, 0.8)',
            padding: '30px',
            borderRadius: '10px',
            color: 'black',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
            padding:20,
            
          }}>
            <Typography variant="h4" gutterBottom>Staff Registration Slip</Typography>
            <Typography variant="body1"><strong>Name:</strong> {staffObj.name}</Typography><br />
            <Typography variant="body1"><strong>Email:</strong> {staffObj.email}</Typography><br />
            <Typography variant="body1"><strong>CNIC:</strong> {staffObj.cnic}</Typography><br />
            <Typography variant="body1"><strong>Phone Number:</strong> {staffObj.phone}</Typography><br />
            <Typography variant="body1"><strong>Position:</strong> {staffObj.position}</Typography><br />
            <Typography variant="body1"><strong>Salary:</strong> {staffObj.salary}</Typography><br />
            <Typography variant="body1"><strong>Joining Date:</strong> {staffObj.joiningDate}</Typography><br />
            
            <Button fullWidth style={{ background: '#9DBDE6', color: 'white' }} onClick={handleBackToDashboard}>
              Back to Dashboard
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default StaffRegisteredSlip;
