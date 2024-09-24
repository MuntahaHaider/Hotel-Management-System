import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import style from '././CustomerLogin.module.css'
import { auth, database } from '../../../Config/firebase';

const CustomerLogin = ({ onLogin }) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
 const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email,password)
    await signInWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      console.log(userCredential)
      console.log(userCredential.user.uid)
      localStorage.setItem('UserID',userCredential.user.uid)

      const userRole = 'Customer'; // This should come from your authentication logic
      localStorage.setItem('userRole', userRole);
      
      const getData = await getDoc(doc(database,'users',userCredential.user.uid))
      console.log('getData',getData.data())
      alert('Customer Login......! \n Welcome to the Customer Dashboard... ')
      navigate('/customerDashboard');
    })
    .catch((error) => {
      console.log(error)
    });
    onLogin();
  }
  return (
    <>
    
<div className={style.background}>
  <div className={style.loginas}>
  <form action="">
  <Typography variant="h5">Login as Customer</Typography ><br /><br />
        <TextField style={{background:'#7C8BA8',borderRadius:10}}  onChange={(e)=>setEmail(e.target.value)}

         fullWidth label='Email'/><br /><br />
        <TextField style={{background:'#7C8BA8',borderRadius:10}}  onChange={(e)=>setPassword(e.target.value)}
         fullWidth label='password'/>   <br /><br />
         <Button 
         onClick={handleLogin}
         variant="contained" 
         type="submit"
         sx={{fontSize:15}}>
              Login
        </Button>
        <br /><br />
         <h5>
         Don't have an account?  <NavLink to='/'>Signup</NavLink>
         </h5>    
     </form> 
  </div>
</div>
    </>
  )
}

export default CustomerLogin