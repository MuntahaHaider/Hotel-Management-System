import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { database } from '../../Config/firebase';
import AdimNavbar from '../../AdminComponents/Navbar/Navbar';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const PayemntDetail = () => {
    const [bookingdetail,setBookingDetail] = useState([])
    const [refresh, setRefresh] = useState(false);
    const [paymentDetail,setPaymentDetail] = useState([])

    const getData = async ()=>{
        try{
         let array = [];
         const getdata = await getDocs(collection(database,'RoomBooking'));
         getdata.forEach((e,i)=>{
           array.push({...e.data(),id:e.id})
           setRefresh(!refresh)
         })
         setBookingDetail(array)
        }catch(error){
         console.log(error)
        }
     }
     useEffect(()=>{
       getData()

     },[refresh])


     const paymentData = async ()=>{
        try{
         let array = [];
         const getdata = await getDocs(collection(database,'payment'));
         getdata.forEach((e,i)=>{
           array.push({...e.data(),id:e.id})
           setRefresh(!refresh)
         })
         setPaymentDetail(array)
        }catch(error){
         console.log(error)
        }
     }
     useEffect(()=>{
      
       paymentData()

     },[refresh])
     console.log(paymentDetail)

  return (
<>
<AdimNavbar/>

<div style={{  background: 'linear-gradient(to right, #6d6027, #d3cbb8)',color:'white'
}}>
<div style={{margin:'auto',padding:20,marginTop:30,color:'white'}}>
    <h4 style={{textAlign:'center',padding:10}}>Booking Payment Detail</h4>
    <div>
    <TableContainer sx={{ maxWidth: 600 , margin:'auto', padding:10,color:'white' }}>
        <table style={{color:'white'}}>
            <TableHead>
              <TableRow>
              <TableCell align="left">Payment ID</TableCell>
              <TableCell align="right">Payment</TableCell>
              <TableCell align="right">Payment for</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
        paymentDetail.map((e,i)=>{
            return(
                <>
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{e.id}</TableCell>
                <TableCell align="right">{e.amount}</TableCell>
                <TableCell align="right">{e.selectedOption
                }</TableCell>              
              </TableRow>
                </>
            )
        })
    }
            </TableBody>
        </table>
     </TableContainer>
    </div>
</div>
</div>
</>    
  )
}

export default PayemntDetail

