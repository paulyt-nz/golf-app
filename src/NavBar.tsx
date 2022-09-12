import React from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid, ListItem, Divider, Card, CardHeader, CardContent } from '@mui/material';

function NavBar() {

return (
    <AppBar color='secondary' position='static' style={{ height: "64px" }}>
        <Toolbar>
            <Typography color='inherit'>SHANKERS</Typography>
        </Toolbar>
    </AppBar>
)
}

export default NavBar