import React from 'react'
import { useLocation } from 'react-router-dom'
import CustomerNavbar from '../Navbar'
import { Grid } from '@mui/material'

const RoomDetail = () => {
    const location = useLocation()
    console.log(location.state)
  return (
    <>
    <div style={{background: 'rgba(220, 210, 210, 0.8)',height:'auto'}}>
       <CustomerNavbar/>

     <Grid container spacing={2}>
      <Grid item xs={12} md={6} style={{paddingLeft:50,marginTop:100}}>
      <img width="400px" src={location.state.e.imageurl} alt={location.state.e.title} />
      </Grid>

      <Grid item xs={12} md={6} style={{ width: 500,paddingLeft:50,marginTop:100,paddingBottom:50 }}>
      <h3>{location.state.e.title}</h3>
        <h6>{location.state.e.category}</h6>
        <p><b>Description:</b> {location.state.e.description}</p>
        <p><b>Amount:</b> {location.state.e.amount}</p>
        <p><b>Room ID:</b>{location.state.e.RoomID}</p>
        <p><b>Room Type: </b>{location.state.e.RoomType}</p>
        <p><b>Room Number: </b>{location.state.e.RoomNumber}</p>
        <p><b>Status: </b>{location.state.e.Status}</p>
      </Grid>

     </Grid>
    </div>
    </>
  )
}

export default RoomDetail;