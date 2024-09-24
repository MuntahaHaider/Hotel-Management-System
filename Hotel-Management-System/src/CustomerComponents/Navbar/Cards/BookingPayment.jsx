
import React, { useState }  from 'react'
import {  Paper, Select, TextField ,FormControl, InputLabel, MenuItem, Button, Box } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../../../Config/firebase';
import CustomerNavbar from '../Navbar';
import { useLocation, useNavigate } from 'react-router-dom';


const BookingPayment = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [paymentid, setPaymentid] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [amount, setAmount] = useState('');

  const location = useLocation()
  // const {BookingObj}  = location.state
  // console.log(location.state)

 const navigate = useNavigate()
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

const PayNow = async (e)=>{
e.preventDefault();
if (!amount || !selectedOption ) {
    alert('Please fill all the fields'); // Alert if any field is empty
    return; // Stop further execution if validation fails
  }
try {
 let paymentObj = {
    amount,
    // paymentid,
    // bookingId,

    selectedOption,
//    classs,
//    amount,
 };
 let getData = await addDoc(collection(database, 'payment'), paymentObj);
 console.log('Document written with ID: ', getData.id);
//  setPayment('');
//  setClasss('');
setSelectedOption(''),
// setPaymentid('')
// setBookingId('')
 setAmount('');
 alert('payment successful.....\n Check your Room.')
//  navigate('/paymentVoucher', { state: { paymentId: getData.id } })
navigate('/addRoom',{state:{...location.state,paymentObj}})
} catch (error) {
 console.log(error,'Please try again.');
}
  }
  return (
    <>

  <div>
    <div style={{backgroundImage:'url(https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.webp?h=662a4f7c&itok=7Laa3LkQ)',height:580, backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
    <CustomerNavbar />
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
            <div style={{padding:3}}>
            <h3>Payment Detail</h3><br />

        <TextField 
        onChange={(e)=>setAmount(e.target.value)}
        fullWidth 
        label='Amount'
        /><br /><br />

    
          <FormControl fullWidth>
      <InputLabel id="payment-method">Payment Method</InputLabel>
      <Select
        labelId="payment-method"
        id="payment-method"
        value={selectedOption}
        label="Payment Method"
        onChange={handleChange}
      >
        <MenuItem value='Credit Card'>Credit Card</MenuItem>
        <MenuItem value='PayPal'>PayPal</MenuItem>
        <MenuItem value='Bank Transfer'>Bank Transfer</MenuItem>
        <MenuItem value='Cash'>Cash</MenuItem>
      </Select>
    </FormControl>
    <br /><br />
    <Button fullWidth style={{background:'#9DBDE6'}} onClick={PayNow}>Pay Now</Button>
            </div>
        </form>


        </div>
     </Box>

    </div>
  </div>
    </>
  )
}

export default BookingPayment