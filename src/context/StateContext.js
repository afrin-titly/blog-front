import React from "react";
import { useContext, useEffect, useState, createContext} from "react"
import { token } from "../lib/token";

const Context = React.createContext()

export const StateContext = ({ children }) => {
  const [loginStatus, setLoginStatus] = React.useState();
  const decoded = ''
  useEffect(()=>{
    if(token) {
      const tokenDecodablePart = token.split('.')[1];
      // useRef?
      decoded = Buffer.from(tokenDecodablePart, 'base64').toString();
      const json = JSON.parse(decoded)
      if(json.exp < Date.now()/1000) {
        clearToken()
      } else {
        setLoginStatus(true)
      }
    }
  }, [token])

  const clearToken = () => {
    if(localStorage.token) {
      localStorage.removeItem('token')
    }
  }

  return (
    <Context.Provider value={{
      loginStatus,
      setLoginStatus,
      clearToken
      }}>
      { children }
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)