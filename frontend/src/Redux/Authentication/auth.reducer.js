import { SIGNUP_LOADING,SIGNUP_ERROR,SIGNUP_SUCCESS,LOGIN_LOADING,LOGIN_ERROR,LOGIN_SUCCESS } from "./auth.types";

const authState = {
    isAuth:false,
    isError:false,
    isLoading:false,
    msg:"",
    token:"",
    data:{}
}

export const authReducer = (state=authState,{type,payload})=>{
    switch(type){
        case SIGNUP_LOADING:{
            return{
                ...state,
                isLoading:true
            }
        }
        case SIGNUP_ERROR:{
            return{
                ...state,
                isError:true
            }
        }
        case SIGNUP_SUCCESS:{
            return{
                ...state,
                isAuth:true,
                msg:payload
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                isAuth:true,
                msg:payload.msg,
                token:payload.token,
                isLoading:false,
                data:payload.userData
            }
        }
        case LOGIN_ERROR:{
            return{
                ...state,
                isError:true
            }
        }
        case LOGIN_LOADING:{
            return{
                ...state,
                isLoading:true
            }
        }
        default:{
            return state
        }
    }
}