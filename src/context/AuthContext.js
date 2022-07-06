import React, { useContext, useEffect, useState } from "react";
import { Buffer } from "buffer";


const AuthContext = React.createContext()

export const AuthProvider = ( {children })=> {
  const [currentUser, setCurrentUser] = React.useState('')


  const token = localStorage.getItem('token')
  const decoded = React.useRef('')
  useEffect(()=>{
    if(token) {
      const tokenDecodablePart = token.split('.')[1];
      decoded.current = Buffer.from(tokenDecodablePart, 'base64').toString()
      const json = JSON.parse(decoded.current)
      if(json.exp < Date.now()/1000) {
        clearToken()
      }
    } else {
      console.log("no token")
    }
  }, [token])

  const clearToken = () => {
    localStorage.removeItem('token')
    setCurrentUser(false)
  }

  const user = async () => {

  }

  const value = {
    currentUser,
    setCurrentUser,
    clearToken,
  }

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
