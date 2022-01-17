import React,{useState} from "react";
import {
  Container,
  Grid,
  Stack,
  Button,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import axios from 'axios'
import {useNavigate } from "react-router";
const SignUp = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const handleSignUp=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUser({...user,[name]:value});
    }

    const registerHandler=async()=>{
        try {
            const passsword=user.password;
            const confirmPassword=user.confirmPassword;
            const registerData={
                username:user.username,
                email:user.email,
                password: user.password
            }
            console.log(registerData)
            const config={
                headers:{
                    "Content-Type": "application/json"
                }

            }
            if(passsword==confirmPassword){
                const{data}=await axios.post('http://localhost:3001/register',registerData,config);
                if(data){
                    alert("Registration Successfull")
                    navigate('/',{replace:true})
                }
            }else{
                alert("Password do not match.")
            }

        }catch (e) {

        }
    }


  return (
    <div sx={{ border: "1px solid black" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ border: "1px solid black", minWidth: "50vw", minHeight: "100vh" }}
      >
        <Grid container sx={{ color: "red", backgroundColor: "red" }}>
          <h1>Image</h1>
        </Grid>

        <Grid
          container
          sx={{ backgroundColor: "", minWidth: "50vw" }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={8} sx={{ border: "1px" }}>
            <Typography sx={{ textAlign: "left" }} variant="h4" component="p">
              Sign up
            </Typography>
            <Typography sx={{ mb: 2 }} variant="subtitle" component="p">
              Let's create your account
            </Typography>
            <TextField
              sx={{ mb: 2, borderRadius: 10 }}
              variant="filled"
              label="Username"
              name="username"
              onChange={handleSignUp}
              value={user.username}
              fullWidth
            />
            <TextField
              sx={{ mb: 4 }}
              variant="filled"
              label="Email"
              name='email'
              onChange={handleSignUp}
              value={user.email}
              fullWidth
            />
               
            <Grid container md={12} spacing={1}>
            <Grid item md={6}>
                 <TextField
                  sx={{ mb: 4 }}
                  variant="filled"
                  label="Password"
                  name='password'
                  onChange={handleSignUp}
                  value={user.password}
                  fullWidth
                />
                </Grid>
                <Grid item md={6}>
                 <TextField
                  sx={{ mb: 4 }}
                  variant="filled"
                  label="Confirm Password"
                  name='confirmPassword'
                  onChange={handleSignUp}
                  value={user.confirmPassword}
                  fullWidth
                />
                </Grid>

              <Grid item>
              
              </Grid>
            </Grid>

            <Button variant="contained" onClick={registerHandler} fullWidth sx={{ p: 2 }}>
              Sign Up
            </Button>

          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default SignUp;
