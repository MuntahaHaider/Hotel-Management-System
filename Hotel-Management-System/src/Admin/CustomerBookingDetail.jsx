// import React from 'react'

// const CustomerBookingDetail = () => {
//   return (
//     <div>CustomerBookingDetail</div>
//   )
// }

// export default CustomerBookingDetail











import { Grid, Box, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import AdimNavbar from '../AdminComponents/Navbar/Navbar';
import { database } from '../Config/firebase';

const CustomerBookingDetail = () => {
    const [addroomdetail, setAddroomDetail] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [paymentDetail, setPaymentDetail] = useState([]);

    const getData = async () => {
        try {
            let array = [];
            const getdata = await getDocs(collection(database, 'RoomBooking'));
            getdata.forEach((e) => {
                array.push({ ...e.data(), id: e.id });
            });
            setAddroomDetail(array);
        } catch (error) {
            console.log(error);
        }
    };

    const getPaymentData = async () => {
        try {
            let array2 = [];
            const getdata = await getDocs(collection(database, 'payment'));
            getdata.forEach((e) => {
                array2.push({ ...e.data(), id: e.id });
            });
            setPaymentDetail(array2);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
        getPaymentData();
    }, [refresh]);
    // const {roomDetailkey} = addroomdetail
    console.log(addroomdetail,paymentDetail)

    const handleDelete = async (id) => {
        try {
            // Reference the document you want to delete
            const docRef = doc(database, 'RoomBooking', id);  // 'RoomBooking' is your collection and id is the document ID
            
            // Delete the document
            await deleteDoc(docRef);
            console.log("Document successfully deleted!");
            setRefresh(!refresh);
            alert('Booking Canceled !')
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };
    return (
        <>
<AdimNavbar />
{
  addroomdetail.map((e,i)=>{
    return(
    <>
    <Box key={e.id}
        sx={{
            padding: 4,
            margin: 'auto',
            maxWidth: 1000,
            background: 'rgba(220, 210, 210, 0.8)',
            borderRadius: 5,
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
            marginBottom:10
        }}>
         <Typography variant="h4" sx={{ mb: 4 }}>Booking Summary</Typography> 

<Grid container spacing={2}>

<Grid item xs={12} md={6}>
        <Typography variant="h6">Customer Information</Typography>
        <Typography>Id: {e.id}</Typography>
        <Typography>Name: {e.name}</Typography>
        <Typography>Email: {e.email}</Typography>
        <Typography>Phone: {e.phone}</Typography>
        <Typography>CNIC: {e.cnic}</Typography>
        <br />
        <Typography variant="h6">Room Details</Typography>
        <Typography>Room Title: {e.roomDetailkey.e.title}</Typography>
        <Typography>Room Decription: {e.roomDetailkey.e.description}</Typography>
        <Typography>Room Id: {e.roomDetailkey.e.id}</Typography>
        <Typography>Room Status: {e.roomDetailkey.e.Status}</Typography>
        <Typography>Room Number: {e.roomDetailkey.e.RoomNumber}</Typography>
        <Typography>Room Type: {e.roomDetailkey.e.RoomType}</Typography>
        <Typography>Number of Rooms: {e.totalNum}</Typography>
        <Typography>Room Price: {e.roomDetailkey.e.amount}</Typography>
        <br />
        <Typography variant="h6">Payment Details</Typography>
        <Typography>Payment ID: {paymentDetail.id}</Typography>
        <Typography>Payment Method: {paymentDetail.selectedOption}</Typography>
        <Typography>Amount: {paymentDetail.amount}</Typography>
        <br />
        <Button
           variant="contained"
           color="secondary"
           onClick={() => handleDelete(e.id)}>
           Delete Booking
       </Button>
</Grid>

<Grid item xs={12} md={6}>
<Box
    component="img"
    src={e.roomDetailkey.e.imageurl}
    alt={e.roomDetailkey.e.RoomType}
    sx={{
        width: '100%',
        borderRadius: 2,
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    }}>

</Box>
</Grid>
</Grid>         
    </Box>
    </>
    )
  })  
}
        </>
    );
};

export default CustomerBookingDetail;






