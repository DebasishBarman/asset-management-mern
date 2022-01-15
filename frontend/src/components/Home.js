import React,{useState} from 'react'
import {
    Grid, Stack, Divider, Typography,
} from '@mui/material'

import Categories from './Categories';
import Users from './Users';

const Home = () => {
    return (
        <>
        <Grid item lg={9}>
                        <Stack>
                            <Grid container mt={3}>
                                <Grid item>
                                    <Typography variant="subtitle" component="p" textAlign='start'>
                                        Welcome
                                    </Typography>
                                    <Typography variant="h4" component="p" sx={{ color: '#fff' }}>
                                        Hi Debasish
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Stack>
                        <Divider textAlign="left" sx={{ color: '#fff', marginTop: 2 }}>CATEGORIES</Divider>

                        {/* Categories Stack */}
                        <Stack mt={3} spacing={2}>
                            <Categories/>
                        </Stack>

                        {/* Work needs to be done below */}
                        <Divider textAlign="left" sx={{ color: '#fff', marginTop: 2 }}>USERS</Divider>
                        <Stack mt={3} spacing={2}>
                            <Users/>
                        </Stack>

                    </Grid>
            
        </>

    )
}

export default Home

