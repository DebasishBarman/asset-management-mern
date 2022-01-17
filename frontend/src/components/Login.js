import React,{useState} from 'react'
import { Container, Grid, Stack, Button, Typography, TextField, Box } from '@mui/material'
import axios from 'axios'
import {useNavigate } from "react-router";
const Login = () => {
    const [user,setUser]=useState({
        username:'',
        password:''
    })

    const navigate=useNavigate();

    const loginHandler=async(e)=>{
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const {data}=await axios.post('http://localhost:3001/login',{username:user.username,password:user.password},config)
            if(data){
                localStorage.setItem('userLogin',JSON.stringify(data));
                navigate('/dashboard',{replace:true})
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleLogin=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUser({...user,[name]:value}) 
    }

    const signup=()=>{
        navigate('/signup',{replace:false})
    }

    return (
        <div sx={{ border: '1px solid black' }}>
            <Stack direction='row' justifyContent='space-between' sx={{ minWidth: '50vw', minHeight: '100vh' }}>
                <Grid container sx={{ color: 'red', backgroundColor: 'red' }}>
                    <h1>Image</h1>
                </Grid>

                <Grid container sx={{  minWidth: '50vw' }}
                    alignItems="center" justifyContent='center'
                >
                    <Grid item md={8} sx={{ border: '1px' }} >
                        <Typography sx={{ textAlign: 'left' }} variant="h4" component='p'>
                            Log In
                        </Typography>
                        <Typography sx={{textAlign:'left', mb: 2 }} variant="subtitle" component='p'>
                            Log in to your account
                        </Typography>
                        <TextField sx={{ mb: 2, borderRadius: 10 }} name='username' onChange={handleLogin} value={user.username} variant='filled' label='Username' fullWidth />
                        <TextField sx={{ mb: 4 }} onChange={handleLogin} name='password' value={user.password} variant='filled' label='Password' fullWidth />

                        <Button variant='contained' fullWidth sx={{p:2}}
                        onClick={loginHandler}
                        >
                            Log in
                        </Button>

                        <Button variant='outlined' fullWidth sx={{p:2,mt:2}}
                                onClick={signup}
                        >
                            Sign Up
                        </Button>
                    </Grid>
                    <a></a>


                </Grid>

            </Stack>

        </div>

    )
}

export default Login
