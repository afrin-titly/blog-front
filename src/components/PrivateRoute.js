import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext'

const PrivateRoute = ({children}) => {
  const { currentUser } = useAuthContext()
  // console.log("-----"+currentUser)

  return localStorage.getItem('token') ? children : <Navigate to={'/login'} />
}

export default PrivateRoute