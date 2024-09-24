import { collection, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { database } from '../../../Config/firebase';
import { Box } from '@mui/material';

const PaymentVoucher = () => {
 
  const location = useLocation()
 const {paymentId} = location.state
 console.log(paymentId)
    const [voucher,setVoucherDetail] = useState([])
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate()

    const getData = async ()=>{
        
        try{
         let array = [];
         const getdata = await getDoc(collection(database,'payment',paymentId));
    
         getdata.forEach((e,i)=>{
           array.push({...e.data(),id:e.id})
           setRefresh(!refresh)
         })
          setVoucherDetail(array)
 
        }catch(error){
         console.log(error)
        }
     }
 
     useEffect(()=>{
       getData()
       console.log(voucher)

     },[refresh])




  return (
    <>
   <div>
    <div style={{backgroundImage:'url(https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.webp?h=662a4f7c&itok=7Laa3LkQ)',height:580, backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
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
                <h3>Payment Voucher</h3>
                <p><b>ID:{paymentId}</b></p>

                <p><b>Amount:{voucher.amount}</b></p>
                {
                    voucher.map((e,i)=>{
                        return(
                            <>
                             <p><b>ID:{voucher.id}</b></p>
                            <p><b>Name:{voucher.name} </b></p>
                            <p><b>Email: </b></p>
                            <p><b>CNIC:</b> </p>
                            <p><b>Phone:</b> </p>
                            <p><b>Room id:</b> </p>
                            <p><b>Room Type:</b> </p>
                            <p><b>Room Number:</b> </p>
                            <p><b>Number Of Rooms:</b> </p>
                            <p><b>Date:</b> </p>
                            <p><b>Amount:{voucher.amount} </b></p>
                            <p><b>Payment Method: </b></p>

                            </>
                        )
                    })
                }
            </div>
          </Box>
    </div>
   </div>
     
    </>
  )
}

export default PaymentVoucher