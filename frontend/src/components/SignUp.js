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
const SignUp = () => {
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
          sx={{ backgroundColor: "yellow", minWidth: "50vw" }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={8} sx={{ border: "1px" }}>
            <Typography sx={{ textAlign: "right" }} variant="h4" component="p">
              Log In
            </Typography>
            <Typography sx={{ mb: 2 }} variant="subtitle" component="p">
              Log in to your account
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
