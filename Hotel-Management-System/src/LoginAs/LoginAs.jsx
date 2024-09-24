import { Button } from '@mui/material'
import React from 'react'
import style from './LoginAs.module.css'
import { useNavigate } from 'react-router-dom'
const LoginAs  = () => {
  const navigate = useNavigate()
  return (
    <>
<div className={style.background}>
<div className={style.loginas}>
          <Button onClick={()=>navigate('/loginasAdmin')}><h4>Login as Admin</h4></Button><br />
          <Button onClick={()=>navigate('/loginasCustomer')}><h4>Login as customer</h4></Button><br />
          <Button onClick={()=>navigate('/loginsAsStaff')}><h4>Login as Staff</h4></Button><br />
    </div>
</div>    
    </>
  )
}

export default LoginAs;