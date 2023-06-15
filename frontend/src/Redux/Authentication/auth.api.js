import axios from "axios";

export const registerUser = async(data)=>{
    const res = await axios.post(`https://limeroad-backend.onrender.com/user/register`,data)
    const {msg} = res.data
    return msg
}

export const loginUser = async(data)=>{
    const res = await axios.post(`https://limeroad-backend.onrender.com/user/login`,data)
    const {msg,token} = res.data
    const userData = res.data.data
    // console.log(userData)
    return {msg,token,userData}
}

export const sentOtpFunction = async(data)=>{
    const res = await axios.post(`https://limeroad-backend.onrender.com/user/verify`,data)
    const status = res.status
    console.log(res)
    return status
}