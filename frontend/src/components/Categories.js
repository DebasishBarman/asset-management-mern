import React, { useState } from 'react'
import {
    Container, Grid, Stack, Divider, Typography, Drawer, Button, Select, MenuItem,FormControl,InputLabel,
    Card,Box, Tab, Tabs, PropTypes, TextField, Autocomplete
} from '@mui/material'

const Categories = () => {
    const [state, setState] = React.useState({ right: false });
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ state, [anchor]: open });
    };

    return (
        <>
            <Grid container spacing={2} >
                <Grid item sx={{}} >
                    <Card sx={{ width: 150, height: 150, }}>
                        <Box sx={{ borderTop: '14px solid black' }} />
                        <Grid container sx={{ height: 100 }} alignItems='center' justifyContent='center'>
                            <Typography alignItems='center'>
                                fff
                            </Typography>
                        </Grid>


                    </Card>
                </Grid>
                <Grid item sx={{}} >
                    <Card sx={{ width: 150, height: 150, }}>
                        <Box sx={{ borderTop: '14px solid black' }} />
                        <Grid container sx={{ height: 100 }} alignItems='center' justifyContent='center'>
                            <Typography alignItems='center'>
                                fff
                            </Typography>
                        </Grid>


                    </Card>
                </Grid>
                <Grid item sx={{}} >
                    <Card sx={{ width: 150, height: 150, }}>
                        <Box sx={{ borderTop: '14px solid black' }} />
                        <Grid container sx={{ height: 100 }} alignItems='center' justifyContent='center'>
                            <Typography alignItems='center'>
                                fff
                            </Typography>
                        </Grid>


                    </Card>
                </Grid>

                <Grid item sx={{}} >
                    <Card sx={{ width: 150, height: 150, border: '2px dashed black' }} type='button'
                        onClick={toggleDrawer('right', true)}
                    >
                        <Box />
                        <Grid container sx={{ height: 100 }} alignItems='center' justifyContent='center'>
                            <Typography>
                                Add new Categories
                            </Typography>
                        </Grid>


                    </Card>
                </Grid>



            </Grid>

            <React.Fragment key={'right'}>

                <Drawer
                    anchor='right'
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    <Box
                        sx={{ width: 'right' === 'top' || 'right' === 'bottom' ? 'auto' : 450 }}
                    // onClick={toggleDrawer('right', false)}
                    >
                        <Grid container lg={12} alignItems='center'>
                            <Grid items p={2} lg={12} p={2}>
                                <TextField
                                    label='Category name'
                                    variant='standard'
                                    fullWidth />
                            </Grid>
                            <Grid items p={2} lg={12}>
                                <TextField
                                    label='Asset ID'
                                    variant='standard'
                                    fullWidth />
                            </Grid>
                            <Grid items p={2} lg={12}>
                                <TextField
                                    type='date'
                                    variant='outlined'
                                    // label='Date'
                                    fullWidth />
                            </Grid>
                            <Grid items lg={12} p={2}>
                                <FormControl variant="standard" sx={{width:'100%'}} >
                                    <InputLabel id="demo-simple-select-standard-label">Asset Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={age}
                                        onChange={handleChange}
                                        label="Asset Status"
                                        sx={{width:'100%'}}
                                    >
                                        
                                        <MenuItem value='active'>Active</MenuItem>
                                        <MenuItem value='submitted'>Submitted</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid items p={2} lg={12}>
                                <TextField
                                    label='Asset Assigned to'
                                    variant='standard'
                                    fullWidth />
                            </Grid>
                        </Grid>

                    </Box>
                </Drawer>
            </React.Fragment>
        </>
    )
}

export default Categories
