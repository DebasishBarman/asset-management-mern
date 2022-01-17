import axios from 'axios';
import Login from '../components/Login';
import {
    LOGIN_SUCCESS,LOGIN_FAIL,LOGIN_REQUEST
} from '../constants/userConstant'

export const login=(email,password)=>async(dispatch)=>{

    try{
        dispatch({
            type:LOGIN_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data}=await axios.post('localhost:3000/login',{email,password},config)
        
        dispatch({
            type:LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(err){
        dispatch({
            type:LOGIN_FAIL,
            payload:err
        })
    }
}

