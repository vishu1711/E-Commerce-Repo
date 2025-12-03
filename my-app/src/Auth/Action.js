import axios from "axios"
import { API_BASE_URL} from "../Config/apiConfig";
import { formControlClasses } from "@mui/material/FormControl";
import { LOGIN_REQUEST, LOGIN_SCCESS,LOGIN_FAILURE, REGISTER_REQUEST,REGISTER_SCCESS,REGISTER_FAILURE, GET_USER_REQUEST, GET_USER_SCCESS, LOGOUT, GET_USER_SCCESS_FAILURE } from "./ActionType";

const token=localStorage.getItem("jwt");

const registerReuest=()=>({type:REGISTER_REQUEST});
const registerSuccess=(user)=>({type:REGISTER_SCCESS,payload:user});
const registerFailure=(error)=>({type:REGISTER_FAILURE,payload:error});

export const register=(userData)=> async(dispatch)=>{
dispatch(registerReuest())
    try{

        const response=await axios.post(`${API_BASE_URL}/auth/signup`,userData)

        const user=response.data;
        console.log("user----->",user);

        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        dispatch(registerSuccess(user.jwt));
    }catch(error)
    {

        dispatch(registerFailure(error.message));
    }
}


const loginReuest=()=>({type:LOGIN_REQUEST});
const loginSuccess=(user)=>({type:LOGIN_SCCESS,payload:user});
const loginFailure=(error)=>({type:LOGIN_FAILURE,payload:error});

export const Login=(userData)=> async(dispatch)=>{
dispatch(loginReuest())
    try{

        const response=await axios.post(`${API_BASE_URL}/auth/signin`,userData)

        const user=response.data;
        console.log("user----->",user);


        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        dispatch(loginSuccess(user.jwt));
    }catch(error)
    {

        dispatch(loginFailure(error.message));
    }
}

const getUserReuest=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user)=>({type:GET_USER_SCCESS,payload:user});
const getUserFailure=(error)=>({type:GET_USER_SCCESS_FAILURE,payload:error});

export const getUser=(jwt)=> async(dispatch)=>{
dispatch(getUserReuest())
    try{

        const response=await axios.post(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization":`Bearer ${jwt}`   

            }
        })

        const user=response.data;

        dispatch(getUserSuccess(user));
    }catch(error)
    {

        dispatch(getUserFailure(error.message));
    }
}

export const logout=()=>(dispatch)=>{

    dispatch({type:LOGOUT,payload:null})

}