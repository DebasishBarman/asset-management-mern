import React from 'react'
import {
    Container, Grid, Stack, Divider, Typography,
    Card, List, ListItem, ListItemButton, ListItemIcon, Box
} from '@mui/material'

import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import PixIcon from '@mui/icons-material/Pix';

const Dashboard = () => {
    return (
        <div style={{ background: '#1D3557' }}>
            <Grid container lg={12}>
                <Grid item lg={3} sx={{ minHeight: '100vh' }}>
                    <Container sx={{ p: 2, height: '100%' }}>
                        <nav
                            style={{
                                border: '1px solid black',
                                height: '99%', background: '#fff',
                                borderRadius: 10, padding: 3, margin: 2
                            }}
                        >
                            <List>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PixIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="CATEGORIES" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="ASSET LOGS" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ background: '#1D3557', borderRadius: '10px', color: '#fff' }}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="LOG OUT" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>


                    </Container>
                </Grid>
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
                        <Grid container spacing={2} >
                            <Grid item sx={{}} >
                                <Card sx={{ width: 150, height: 150, }}>
                                    <Box sx={{ borderTop: '14px solid black' }} />
                                    <Grid container sx={{height:100}} alignItems='center' justifyContent='center'>
                                    <Typography alignItems='center'>
                                        fff
                                    </Typography>
                                    </Grid>
                                    

                                </Card>
                            </Grid>
                            <Grid item sx={{}} >
                                <Card sx={{ width: 150, height: 150, }}>
                                    <Box sx={{ borderTop: '14px solid black' }} />
                                    <Grid container sx={{height:100}} alignItems='center' justifyContent='center'>
                                    <Typography alignItems='center'>
                                        fff
                                    </Typography>
                                    </Grid>
                                    

                                </Card>
                            </Grid>
                            <Grid item sx={{}} >
                                <Card sx={{ width: 150, height: 150, }}>
                                    <Box sx={{ borderTop: '14px solid black' }} />
                                    <Grid container sx={{height:100}} alignItems='center' justifyContent='center'>
                                    <Typography alignItems='center'>
                                        fff
                                    </Typography>
                                    </Grid>
                                    

                                </Card>
                            </Grid>
                            <Grid item sx={{}} >
                                <Card sx={{ width: 150, height: 150,border:'2px dashed black' }}>
                                    <Box  />
                                    <Grid container sx={{height:100}} alignItems='center' justifyContent='center'>
                                    <Typography>
                                        fff
                                    </Typography>
                                    </Grid>
                                    

                                </Card>
                            </Grid>
                            

                        </Grid>

                    </Stack>
                </Grid>
            </Grid>

        </div>
    )
}

export default Dashboard
