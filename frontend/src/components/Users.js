import {
    Container, Grid, Stack, Divider, Typography,
    Card, List, ListItem, ListItemButton, ListItemIcon, Box, Tab, Tabs, PropTypes, TextField, Avatar, Button, Modal
} from '@mui/material'
import React,{useState,useEffect} from "react";
import axios from "axios";
const Users = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    const userInfo = localStorage.getItem("userLogin")
        ? JSON.parse(localStorage.getItem("userLogin"))
        : null;
    let token = userInfo.token;
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    }
    const [username,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const handleUser = async (e) => {

            try {
                const { data } = await axios.post(
                    "http://localhost:3001/addServiceUser",
                    { username,email },
                    config
                );

            } catch (error) {}

    };
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const serviceUser=async()=>{
            try{
                const {data}=await axios.get('http://localhost:3001/serviceUsers',config);
                if(data){
                    setUsers(data.map((e)=>e));
                }

            }catch(e){

            }
        }
        serviceUser()
    },[])

    return (
        <>
        <Grid container lg={12} spacing={2} >
            {
                users && users.map((e,i)=>(
                    <Grid item lg={12}>
                        <Stack lg={12} direction="row" spacing={2}>
                            <Avatar>{i+1}</Avatar>
                            <Grid item sx={{}} >
                                <TextField
                                    label="Username"
                                    variant="standard"
                                    value={e.userName}
                                />
                            </Grid>
                            <Grid item sx={{}} >
                                <TextField
                                    label="Email"
                                    variant="standard"
                                    value={e.email}
                                />
                            </Grid>
                        </Stack>
                    </Grid>
                ))
            }


            <Grid item lg={12} alignItems="center" justifyContent="center">
                <Grid container >
                    <Button variant="outlined" size="large"  onClick={handleOpen} lg={12}>Add Service User</Button>
                </Grid>

            </Grid>

        </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="p" component="p">
                        Add New User
                    </Typography>
                    <Grid items p={2} lg={12}>
                        <TextField
                            label="Username"
                            variant="standard"
                            name="username"
                            onChange={(e) => setUserName(e.target.value)}
                            // value={name}
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            variant="standard"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            // value={name}
                            fullWidth
                        />
                    </Grid>
                    <Button onClick={handleUser}>Save </Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Users
