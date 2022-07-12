import React, { useContext, useEffect, useState } from "react";
import { Buffer } from "buffer";
import token from "../lib/token";
import { authenticate } from '../lib/session'
import { useNavigate } from 'react-router-dom'

const AuthContext = React.createContext()

export const AuthProvider = ( {children })=> {
  const [currentUser, setCurrentUser] = React.useState('')
  const [validToken, setValidToken] = React.useState(false)
  const navigate = useNavigate();

  const decoded = React.useRef('')

  // const userLogin = async (user) => {
  //   const res = await authenticate(user)
  //   setValidToken(true)
  //   navigate('/home')
  // }

  const isExpired = async () =>{
    const jwt = await token()
    if(jwt) {
      const tokenDecodablePart = jwt.split('.')[1];
      decoded.current = Buffer.from(tokenDecodablePart, 'base64').toString()
      const json = JSON.parse(decoded.current)
      if(json.exp < Date.now()/1000) {
        localStorage.clear()
        setValidToken(false)
      } else {
        return true
      }
    }
  }

  const clearToken = () => {
    localStorage.removeItem('token')
    setCurrentUser(false)
  }

  const value = {
    currentUser,
    setCurrentUser,
    clearToken,
    validToken,
    setValidToken,
    isExpired,
    // userLogin,
  }

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
