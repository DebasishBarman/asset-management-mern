import React from 'react'
import { Container, Grid, Stack, Divider, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const Dashboard = () => {
    return (
        <div style={{ background: '#4c566a' }}>
            <Grid container lg={12}>
                <Grid item lg={3} sx={{ minHeight: '100vh' }}>
                    <Container sx={{ border: '1px solid black', p: 2, height: '100%' }}>
                        <nav
                            style={{ border: '1px solid black',
                             height: '100%',background:'#fff',
                             borderRadius: 10, padding: 3, margin: 2 }}
                        >
                            <List sx={{ border: '1px solid black' }}>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <InboxIcon />
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
                                <ListItem sx={{border:'1px solid red',borderRadius:'10px'}}>
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

                </Grid>
            </Grid>

        </div>
    )
}

export default Dashboard
