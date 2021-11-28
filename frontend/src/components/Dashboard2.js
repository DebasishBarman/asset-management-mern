import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ state, [anchor]: open });
    };

    return (
        <div>
            <Button onClick={toggleDrawer('right', true)}>{'right'}</Button>
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

        </div>
    );
}