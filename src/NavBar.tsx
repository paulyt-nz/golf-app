import React from 'react'
import { Typography, AppBar, Toolbar, Button} from '@mui/material';

interface NavBarProps {
    toggleScorecard: () => void;
    scorecard: number[][]
}


function NavBar(props: NavBarProps) {

    const handleClick = () => {
        props.toggleScorecard()
    }

    return (
        <AppBar color='secondary' position='static' style={{ height: "64px" }}>
            <Toolbar style={{position: "relative"}}>
                <Typography style={{float: "left"}} color='inherit'>WHACKF*#K</Typography>
                <Button style={{float: "right"}} onClick={handleClick} color="inherit">Scorecard</Button>
                <Button style={{float: "right"}} color="inherit">RESET</Button>
            </Toolbar>
        </AppBar>
)
}

export default NavBar