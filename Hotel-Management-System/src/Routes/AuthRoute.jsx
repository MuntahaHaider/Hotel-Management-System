import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoute = () => {
  return !localStorage.getItem('UserID') ? <Outlet /> : <Navigate to='/customerDashboard'/>
}

export default AuthRoute