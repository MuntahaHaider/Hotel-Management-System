
import { Box, Button, Paper, TextField } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../Config/firebase';
import SatffNavbar from './Navbar';

const StaffForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnic, setCnic] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const staffObj = {
        name,
        email,
        cnic,
        phone,
        position,
        salary,
        joiningDate,
      };
      
      await addDoc(collection(database, 'Staff'), staffObj);
      alert('Staff registered successfully');
      
      // Clear the form
      setName('');
      setEmail('');
      setCnic('');
      setPhone('');
      setPosition('');
      setSalary('');
      setJoiningDate('');
      
      navigate('/staffRegisteredSlip',{state:{staffObj}}); // Navigate to the staff list or another route
    } catch (error) {
      console.error('Error registering staff:', error);
    }
  };

  return (
    <>
    <SatffNavbar/>
    <div>
      <div style={{ backgroundImage: 'url(https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.webp?h=662a4f7c&itok=7Laa3LkQ)', height: 'auto', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
       
        <Box>
          <div style={{
            margin: 'auto',
            maxWidth: 600,
            background: 'rgba(220, 210, 210, 0.8)',
            padding: '30px',
            borderRadius: '10px',
            color: 'black',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
          }}>
            <form>
              <h3>Staff Registration</h3>
              <br />

              <TextField onChange={(e) => setName(e.target.value)} label='Name' fullWidth value={name} /><br /><br />

              <TextField onChange={(e) => setEmail(e.target.value)} label='Email' fullWidth value={email} /><br /><br />

              <TextField onChange={(e) => setCnic(e.target.value)} label='CNIC' fullWidth value={cnic} /><br /><br />

              <TextField onChange={(e) => setPhone(e.target.value)} label='Phone Number' fullWidth value={phone} /><br /><br />

              <TextField onChange={(e) => setPosition(e.target.value)} label='Position' fullWidth value={position} /><br /><br />

              <TextField onChange={(e) => setSalary(e.target.value)} label='Salary' fullWidth value={salary} /><br /><br />

              <TextField onChange={(e) => setJoiningDate(e.target.value)}  label='Joining Date' fullWidth value={joiningDate} /><br /><br />

              <Button fullWidth style={{ background: '#9DBDE6' }} onClick={handleSubmit}>Register Staff</Button>
            </form>
          </div>
        </Box>
      </div>
    </div>
    
    </>
  );
};

export default StaffForm;
