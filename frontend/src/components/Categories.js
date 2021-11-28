import React, { useState } from 'react'
import {
    Container, Grid, Stack, Divider, Typography, Drawer, Button,
    Card, List, ListItem, ListItemButton, ListItemIcon, Box, Tab, Tabs, PropTypes
} from '@mui/material'

const Categories = () => {
    const [state, setState] = React.useState({ right: false });

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
                        onClick={toggleDrawer('right', false)}
                    >
                        <p>Hello</p>

                    </Box>
                </Drawer>
            </React.Fragment>
        </>
    )
}

export default Categories
