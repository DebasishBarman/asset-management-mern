import {
    Container, Grid, Stack, Divider, Typography,
    Card, List, ListItem, ListItemButton, ListItemIcon, Box, Tab, Tabs, PropTypes
} from '@mui/material'
const Users = () => {
    return (
        <Grid container spacing={2} >
            <Grid item sx={{}} >
                <Card sx={{ width: 150, height: 150, }}>
                    <Box sx={{ borderTop: '14px solid black' }} />
                    <Grid container sx={{ height: 100 }} alignItems='center' justifyContent='center'>
                        <Typography alignItems='center'>
                            Heeeeeeee
                        </Typography>
                    </Grid>

                </Card>
            </Grid>
        </Grid>
    )
}

export default Users
