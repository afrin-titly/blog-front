import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [jwttoken, setjwtToken] = React.useState()
  React.useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token) {
      setjwtToken(token)
    }
  }, [])
  return localStorage.getItem('token') ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute