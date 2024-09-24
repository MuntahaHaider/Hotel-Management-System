import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { database } from '../../Config/firebase';
import AdimNavbar from '../../AdminComponents/Navbar/Navbar';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const RoomBookingDetail = () => {
    const [bookingdetail,setBookingDetail] = useState([])
    const [refresh, setRefresh] = useState(false);


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

  return (
<>
<AdimNavbar/>

<div style={{  background: 'linear-gradient(to right, #6d6027, #d3cbb8)',color:'white'
}}>
<div style={{margin:'auto',padding:20,marginTop:30,color:'white'}}>
    <h4 style={{textAlign:'center',padding:10}}>Room Booking Detail</h4>
    <div>
    <TableContainer sx={{ maxWidth: 1100 , margin:'auto', padding:10,color:'white' }}>
        <table style={{color:'white'}}>
            <TableHead>
                <TableRow>
                <TableCell align="left">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">CNIC</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Room Type</TableCell>
              <TableCell align="right">Room Status</TableCell>
              <TableCell align="right">Num of Rooms</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
        bookingdetail.map((e,i)=>{
            return(
                <>
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{e.id}</TableCell>
                <TableCell align="right">{e.name}</TableCell>
                <TableCell align="right">{e.email}</TableCell>
                <TableCell align="right">{e.cnic}</TableCell>
                <TableCell align="right">{e.phone}</TableCell>
                <TableCell align="right">{e.roomType}</TableCell>
                <TableCell align="right">{e.roomStatus}</TableCell>
                <TableCell align="right">{e.totalNum}</TableCell>
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

export default RoomBookingDetail