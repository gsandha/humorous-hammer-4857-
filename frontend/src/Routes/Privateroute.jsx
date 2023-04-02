import React from 'react'
import { Navigate } from 'react-router-dom'

export const Privateroute = ({children}) => {
    const token  = localStorage.getItem("userToken") || ""
    console.log(token==="")
    if(token===""){
         return <Navigate to={"/login"}/>
    }

    return children
}
