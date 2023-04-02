import axios from "axios";

export const registerUser = async(data)=>{
    const res = await axios.post(`https://alert-seal-bandanna.cyclic.app/user/register`,data)
    const {msg} = res.data
    return msg
}

export const loginUser = async(data)=>{
    const res = await axios.post(`https://alert-seal-bandanna.cyclic.app/user/login`,data)
    const {msg,token} = res.data
    const userData = res.data.data
    // console.log(userData)
    return {msg,token,userData}
}

export const sentOtpFunction = async(data)=>{
    const res = await axios.post(`https://alert-seal-bandanna.cyclic.app/user/verify`,data)
    const status = res.status
    console.log(res)
    return status
}