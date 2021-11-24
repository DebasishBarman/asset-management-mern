import React from 'react'
import { Container, Grid, Stack, Button, Typography, TextField, Box } from '@mui/material'
const Login = () => {
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
                        <TextField sx={{ mb: 2, borderRadius: 10 }} variant='filled' label='Username' fullWidth />
                        <TextField sx={{ mb: 4 }} variant='filled' label='Password' fullWidth />

                        <Button variant='contained' fullWidth sx={{p:2}}
                        >
                            Log in
                        </Button>
                    </Grid>


                </Grid>

            </Stack>

        </div>

    )
}

export default Login
