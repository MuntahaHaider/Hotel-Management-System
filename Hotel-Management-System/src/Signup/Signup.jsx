import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth, database } from '../Config/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import style from './Signup.module.css'

const Signup = () => {
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userdata, setUserdata] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate()

      const addData = async (e) => {
        e.preventDefault();
        console.log(name,username, email, password);
        await createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            console.log("user", userCredential.user.uid);
            // data in database
            let userObj = {
              name,
              username,
              email,
            };
            const uID = userCredential.user.uid;
            const storeData = await setDoc(doc(database, "users", uID), userObj);  
          console.log(storeData,"data store");
            navigate("/loginAs");
          })
          .catch((err) => {
            console.log(err);
          });
}
  return (

    <>
   <div className={style.background}>
   <div className={style.loginas}>
    <form action="">
    <Typography variant="h5">Signup</Typography ><br /><br />

    <TextField  style={{background:'#7C8BA8',borderRadius:10}}
        onChange={(e)=>setName(e.target.value)}
        fullWidth 
        label='Name'/><br /><br />
        

        <TextField  style={{background:'#7C8BA8',borderRadius:10}}
         onChange={(e)=>setUsername(e.target.value)}

         fullWidth 
         label='Username'/><br /><br />


        <TextField style={{background:'#7C8BA8',borderRadius:10}}
         onChange={(e)=>setEmail(e.target.value)}

         fullWidth 
         label='Email'/><br /><br />


        <TextField style={{background:'#7C8BA8',borderRadius:10}}
         onChange={(e)=>setPassword(e.target.value)}

         fullWidth 
         label='Passwrod'/>   <br /><br />
         <Button 
         onClick={addData}
         variant="contained" 
         type="submit"
         sx={{fontSize:15}}>
              Signup
        </Button><br /><br />
         <h5>
         Already have an account?  <NavLink to='/loginAs'>Login</NavLink>
         </h5>
    </form>
    </div>
   </div>

    </>
  )
}

export default Signup















// import React from 'react'

// const LoginAsStaff = () => {
//   return (
//     <div>LoginAsStaff</div>
//   )
// }

// export default LoginAsStaff










// import React, { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom';
// import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
// import { signInWithEmailAndPassword } from 'firebase/auth';
// // import seminar from '../../assets/Seminar.png'
// // import logo from '../../assets/logo.jpg'
// import { doc, getDoc } from 'firebase/firestore';
// import style from './StaffLogin.module.css'
// import { auth, database } from '../Config/firebase';

// const StaffLogin = () => {
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')
//  const navigate = useNavigate()

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log(email,password)
//     await signInWithEmailAndPassword(auth, email, password)
//     .then(async(userCredential) => {
//       console.log(userCredential)
//       console.log(userCredential.user.uid)
//       localStorage.setItem('UserID',userCredential.user.uid)
//       const getData = await getDoc(doc(database,'users',userCredential.user.uid))
//       console.log('getData',getData.data())
//       alert('Customer Login......! \n Welcome to the Staff Dashboard... ')
//       navigate('/staffDashboard');
//     })
//     .catch((error) => {
//       console.log(error)
//     });

//   }
//   return (
//     <>
    
// <div className={style.background}>
//   <div className={style.loginas}>
//   <form action="">
//   <Typography variant="h5">Login as Staff</Typography ><br /><br />
//         <TextField sx={{color:'white'}} onChange={(e)=>setEmail(e.target.value)}

//          fullWidth label='Email'/><br /><br />
//         <TextField  onChange={(e)=>setPassword(e.target.value)}
//          fullWidth label='password'/>   <br /><br />
//          <Button 
//          onClick={handleLogin}
//          variant="contained" 
//          type="submit"
//          sx={{fontSize:15}}>
//               Login
//         </Button>
//         <br /><br />
//          <h5>
//          Don't have an account?  <NavLink to='/'>Signup</NavLink>
//          </h5>    
      
//      </form> 
 


//   </div>
// </div>




//     </>
//   )
// }

// export default StaffLogin