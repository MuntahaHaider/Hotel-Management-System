

import { Box, Button, Paper, TextField } from '@mui/material'
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { database } from '../../../Config/firebase'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import CustomerNavbar from '../Navbar'
const RoomBookingForm = () => {
 const {id} = useParams()
//  console.log(id)
 const location = useLocation()
 const roomdetail = location.state
//  console.log(location.state)


  const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [cnic,setCnic] = useState('')
    const [phone,setPhone] = useState('')
    const [roomType,setRoomtype] = useState('')
    const [roomStatus,setRoomStatus] = useState('')
    const [totalNum,setTotalNum] = useState('')
    const [amount,setAmount] = useState('')

    const [date,setData] = useState('')

    // const [age,setAge] = useState('')
    const [refresh, setRefresh] = useState(false);
   const navigate = useNavigate()

   
    const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
        let BookingObj = {
            name,
            email,
            cnic,
        phone,
        roomType,
        roomStatus,
        totalNum,
        date,
        amount,
        roomDetailkey:roomdetail,
        }
        const addData = await addDoc(collection(database,'RoomBooking'),BookingObj)
        console.log('Document written with ID: ', addData.id);
        setName('');
        setEmail('')  ;
        setCnic('');
        setPhone('');
        setRoomtype('');
        setRoomStatus('');
        setTotalNum('')
        setData('')
        setAmount('')
        navigate('/bookingPayment',{state:{...BookingObj,roomdetail}})

      }catch(error){
        console.log(error)
      }
    }


    const getData = async ()=>{
       try{
        let array = [];
        const getdata = await getDocs(collection(database,'RoomBooking'));
        getdata.forEach((e,i)=>{
          array.push({...e.data,id:e.id})
          setRefresh(!refresh)
        })
        setData(array)
        // console.log(data)

       }catch(error){
        console.log(error)
       }
    }

    useEffect(()=>{
      getData()
    },[refresh])

  return (
    <>

<div>
    <div style={{backgroundImage:'url(https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.webp?h=662a4f7c&itok=7Laa3LkQ)',height:'auto', backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>

    <CustomerNavbar/>
     <Box >
      <div style={{
        margin: 'auto', 
        maxWidth: 600, 
        background: 'rgba(220, 210, 210, 0.8)', // Changed to white with slight transparency
        padding: '30px',
        borderRadius: '10px', // Added for a rounded box effect
        color: 'black', // Changed text to black for contrast with white background
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', // Light shadow for a subtle 3D effect
        }}>
           <form>
           <div style={{padding:3}}>
            <h3>Room Booking</h3><br />
        <TextField onChange={(e)=>setName(e.target.value)} label='Name' fullWidth/><br /><br />

        <TextField onChange={(e)=>setEmail(e.target.value)} label='Email' fullWidth/><br /><br />

        <TextField onChange={(e)=>setCnic(e.target.value)} label=' CNIC' fullWidth/><br /><br />

        <TextField onChange={(e)=>setPhone(e.target.value)} label=' Phone Number' fullWidth/><br /><br />
        <TextField onChange={(e)=>setRoomtype(e.target.value)} value={location.state.e.RoomType}  label='Room Type' fullWidth/><br /><br />

        <TextField onChange={(e)=>setRoomStatus(e.target.value)} value={location.state.e.Status} label='Room Status' fullWidth/><br /><br />

        <TextField onChange={(e)=>setTotalNum(e.target.value)} type='number' label='Total Number of Rooms 'fullWidth/><br /><br />
        <TextField onChange={(e)=>setAmount(e.target.value)} value={location.state.e.amount}  label='Amount'fullWidth/><br /><br />

        <TextField onChange={(e)=>setData(e.target.value)} type='date' 
         fullWidth/><br /><br />
            
           <Button fullWidth style={{background:'#9DBDE6'}} onClick={handleSubmit}>Book Now</Button>

           </div>
           </form>
      </div>
     </Box>

    </div>
</div>   
    </>
  )
}

export default RoomBookingForm;