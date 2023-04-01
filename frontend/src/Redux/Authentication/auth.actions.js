import { loginUser, registerUser } from "./auth.api";
import { SIGNUP_LOADING,SIGNUP_ERROR,SIGNUP_SUCCESS,LOGIN_LOADING,LOGIN_ERROR,LOGIN_SUCCESS } from "./auth.types";

export const registerUserData = (data)=>async(dispatch)=>{
    dispatch({type:SIGNUP_LOADING})
    try {
        const msg = await registerUser(data)
        console.log("hi")
        dispatch({type:SIGNUP_SUCCESS,payload:msg})
    } catch (error) {
        dispatch({type:SIGNUP_ERROR})
    }
}

export const loginUserData = (data)=>async(dispatch)=>{
    dispatch({type:LOGIN_LOADING})
    // console.log(data)
    try {
        const msg = await loginUser(data)
        dispatch({type:LOGIN_SUCCESS,payload:msg})
    } catch (error) {
        dispatch({type:LOGIN_ERROR})
    }
}