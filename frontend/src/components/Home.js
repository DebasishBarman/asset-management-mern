import React,{useState,useEffect} from 'react'
import {
    Grid, Stack, Divider, Typography,
} from '@mui/material'

import Categories from './Categories';
import Users from './Users';
import jwt_decode from "jwt-decode";
const Home = () => {

    const userInfo = localStorage.getItem("userLogin")
        ? JSON.parse(localStorage.getItem("userLogin"))
        : null;
    const dec=jwt_decode(userInfo.token)

    console.log(dec)
    const [user,setUser]=useState("Username")

    useEffect(()=>{
        setUser(dec.id)
    },[])

    return (
        <>
        <Grid item lg={12}>
                        <Stack>
                            <Grid container mt={1}>
                                <Grid item>
                                    <Typography variant="subtitle" component="p" textAlign='start'>
                                        Welcome
                                    </Typography>
                                    <Typography variant="h4" component="p" sx={{ color: '#fff' }}>
                                        Hi {user.toUpperCase()}
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Stack>
                        <Divider textAlign="left" sx={{ color: '#fff', marginTop: 2 }}>CATEGORIES</Divider>

                        {/* Categories Stack */}
                        <Stack mt={3} sx={{border:"red"}} spacing={0}>
                            <Categories/>
                        </Stack>

                        {/* Work needs to be done below */}
                        <Divider textAlign="left" sx={{ color: '#fff', marginTop: 2 }}>SERVICE USER</Divider>
                        <Stack mt={3} spacing={2}>
                            <Users/>
                        </Stack>
                    </Grid>
            
        </>

    )
}

export default Home

