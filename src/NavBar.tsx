import React from 'react'
import { Typography, AppBar, Toolbar} from '@mui/material';

interface NavBarProps {

}


function NavBar(props: NavBarProps) {

return (
    <AppBar color='secondary' position='static' style={{ height: "64px" }}>
        <Toolbar>
            <Typography color='inherit'>WHACKF*#K</Typography>
        </Toolbar>
    </AppBar>
)
}

export default NavBar