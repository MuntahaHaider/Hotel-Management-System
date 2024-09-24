import React from 'react'
import { roomsData } from './RoomsData'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const RoomsCard = () => {
const navigate = useNavigate()

  return (
    <>
<div style={{textAlign:'center',margin:100}}>
<h2>Stay at Our Unique Rooms</h2>
<p>Indulge in a world of luxury and comfort with our exclusive selection of rooms. Whether you’re seeking elegance, relaxation, or modern amenities, our unique rooms are designed to provide the ultimate stay experience. Each room offers carefully curated decor, premium features, and stunning views, ensuring a memorable and comfortable stay. Book now and enjoy unparalleled hospitality in our top-rated accommodations!</p>
</div>
   {
    roomsData.map((e,i)=>{
        return(
            <>
            <div key={i} style={{display:'inline-block',margin:30}}>
               <div key={i} style={{width:380,padding:3,}}>
                   <div><img width={320} height={250} src={e.imageurl} alt="" /></div>
                   <div style={{textAlign:'center',marginTop:10}}><h5>{e.title}</h5>
                   <p>{e.description.slice(0,90)}</p></div>
               </div>
                
                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                    <div><Button onClick={()=>navigate(`/RoomBookingForm/${e.RoomID}`,{state:{e}})}>Book</Button></div>
                    <div><Button onClick={()=>navigate(`/roomDetail/${e.RoomID}`,{state:{e}})}>Detail</Button></div>
                </div>
            </div>
            </>
        )
    })
   }
    </>
  )
}

export default RoomsCard