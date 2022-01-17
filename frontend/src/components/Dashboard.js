import React, {useState} from 'react'
import {
    Container, Grid, Typography,
    Box, Tab, Tabs
} from '@mui/material'


import PropTypes from 'prop-types';
import PixIcon from '@mui/icons-material/Pix';
import Home from './Home';
import AssetLogs from './AssetLogs';
import {useNavigate} from "react-router";

function TabPanel(props) {
    const {children, value, index, ...other} = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >

            }
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
    };
}


const Dashboard = (anchor) => {
    const [value, setValue] = React.useState(0);
    const navigate=useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{background: '#1D3557'}}>
            <Grid container lg={12} sx={{border:'red'}}>
                <Grid item lg={3} sx={{minHeight: '100vh'}}>
                    <Container sx={{p: 2, height: '100%'}}>
                        <nav
                            style={{
                                border: '1px solid black',
                                height: '99%', background: '#fff',
                                borderRadius: 10, padding: 3, margin: 2
                            }}
                        >
                            <Tabs
                                orientation="vertical"
                                value={value}
                                onChange={handleChange}
                                sx={{borderRight: 1, borderColor: 'divider'}}
                            >
                                <Tab label="Categories" icon={<PixIcon/>} iconPosition='start'
                                     sx={{textAlign: 'start'}} {...a11yProps(0)}></Tab>
                                <Tab label="Asset Logs" icon={<PixIcon/>} iconPosition='start'
                                     sx={{textAlign: 'start'}} {...a11yProps(1)} />
                                <Tab label="LogOut" icon={<PixIcon/>} iconPosition='start'
                                     sx={{textAlign: 'start'}} {...a11yProps(2)} />
                            </Tabs>
                        </nav>
                    </Container>
                </Grid>
                <Grid item lg={9}>
                    {localStorage.getItem('userLogin')?(
                        <TabPanel value={value} index={0}>
                        <Home/>
                        </TabPanel>
                        ):(
                        navigate('/',{replace:true})
                        )}
                    {localStorage.getItem('userLogin')?(
                        <TabPanel value={value} index={1}>
                        <AssetLogs/>
                        </TabPanel>
                        ):(
                        navigate('/',{replace:true})
                        )}

                    <TabPanel value={value} index={1}>
                        <AssetLogs/>
                    </TabPanel>
                    <TabPanel index={value} value={2}>
                        {value===2 && navigate('/',{replace:true})}
                        {value===2 && localStorage.removeItem('userLogin')}

                    </TabPanel>
                </Grid>


            </Grid>
        </div>
    )
}

export default Dashboard
