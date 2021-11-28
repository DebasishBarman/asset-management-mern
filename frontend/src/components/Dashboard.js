import React,{useState} from 'react'
import {
    Container, Grid, Stack, Divider, Typography,
    Card, List, ListItem, ListItemButton, ListItemIcon, Box, Tab, Tabs, PropTypes
} from '@mui/material'

import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import PixIcon from '@mui/icons-material/Pix';
import Categories from './Categories';
import Users from './Users';

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
    };
  }
  

const Dashboard = (anchor) => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div style={{ background: '#1D3557' }} >
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

                            <Tabs
                                orientation="vertical"
                                // variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            >
                                <Tab label="Categories" icon={<PixIcon />} iconPosition='start' sx={{textAlign:'start'}} {...a11yProps(0)}></Tab>
                                <Tab label="Asset Logs" icon={<PixIcon />} iconPosition='start' sx={{textAlign:'start'}} {...a11yProps(1)} />
                                <Tab label="LogOut" icon={<PixIcon />} iconPosition='start' sx={{textAlign:'start'}} {...a11yProps(2)} />
                            </Tabs>
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
                        <Categories/>
                    </Stack>

                    {/* Work needs to be done below */}
                    <Divider textAlign="left" sx={{ color: '#fff', marginTop: 2 }}>USERS</Divider>
                    <Stack mt={3} spacing={2}>
                        <Users/>
                    </Stack>

                </Grid>
            </Grid>

        </div>
    )
}

export default Dashboard
