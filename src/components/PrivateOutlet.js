import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PrivateOutlet = () => {
  const { isExpired, validToken, setValidToken } = useAuthContext()
  const getAuthStatus = async () => {
    await isExpired()
  }
React.useEffect(()=>{
  console.log(validToken)
  getAuthStatus()
}, [validToken, getAuthStatus])

  return validToken ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateOutlet