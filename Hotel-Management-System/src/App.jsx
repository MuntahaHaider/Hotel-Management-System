import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup/Signup';
import LoginAs from './LoginAs/LoginAs';
import LoginAdmin from './Admin/LoginAdmin/LoginAdmin';
import AdminDashboard from './Admin/LoginAdmin/AdminDashboard/AdminDashboard';
import CustomerLogin from './Customer/CustomerDashboard/CustomerLogin/CustomerLogin';
import CustomerDashboard from './Customer/CustomerDashboard/CustomerDashboard';
import RoomBookingForm from './CustomerComponents/Navbar/Cards/RoomBookingForm';
import BookingPayment from './CustomerComponents/Navbar/Cards/BookingPayment';
import PaymentVoucher from './CustomerComponents/Navbar/Cards/PaymentVoucher';
import RoomDetail from './CustomerComponents/Navbar/Cards/RoomDetail';
import AddRoom from './CustomerComponents/Navbar/Cards/AddRoom';
import RoomBookingDetail from './Admin/LoginAdmin/RoomBookingDetail';
import PayemntDetail from './Admin/LoginAdmin/PayemntDetail';
import CustomerBookingDetail from './Admin/CustomerBookingDetail';
import StaffForm from './Staff/StaffForm';
import StaffLogin from './Staff/StaffLogin';
import StaffRegisteredSlip from './Staff/StaffRegisterSlip';
import StaffDashboard from './Staff/StaffDashboard';
import StaffDetail from './Admin/LoginAdmin/StaffDetail';
import AuthRoute from './Routes/AuthRoute';
import ProtectedRoute from './Routes/ProtectedRoute';

function App() {

  return (
    <>
       <Routes>

           <Route element={<AuthRoute />}>
           <Route path='/' element={<Signup />}/>
           <Route path='/loginAs' element={<LoginAs />}/>
           <Route path='/loginasAdmin' element={<LoginAdmin/>}/>
           <Route path='/loginsAsStaff' element={<StaffLogin/>}/>
           <Route path='/loginasCustomer' element={<CustomerLogin/>}/>
           </Route>
         
           <Route element={<ProtectedRoute/>}>
           <Route path='/adminDashboard' element={<AdminDashboard/>}/>
           <Route path='/roomBookingDetail' element={<RoomBookingDetail/>}/>
           <Route path='/paymentDetail' element={<PayemntDetail/>}/>
          <Route path='/customerBookingDetail' element={<CustomerBookingDetail/>}/>
          <Route path='/staffDetail' element={<StaffDetail/>}/>
          <Route path='/customerDashboard' element={<CustomerDashboard/>}/>
          <Route path='/roomBookingForm/:id' element={<RoomBookingForm/>}/>
          <Route path='/bookingPayment' element={<BookingPayment/>}/>
          <Route path='/roomDetail/:id' element={<RoomDetail/>}/>
          <Route path='/addRoom' element={<AddRoom/>}/>
          <Route path='/staffDashboard' element={<StaffDashboard/>}/>
          <Route path='/StaffRegister' element={<StaffForm/>}/>
          <Route path='/staffRegisteredSlip' element={<StaffRegisteredSlip/>}/>
           </Route>

       </Routes>
    </>
  )
}

export default App










































