import axios from "axios";

export const registerUser = async(data)=>{
    const res = await axios.post(`http://localhost:4500/user/register`,data)
    const {msg} = res.data
    return msg
}

export const loginUser = async(data)=>{
    const res = await axios.post(`http://localhost:4500/user/login`,data)
    const {msg} = res.data
    return msg
}