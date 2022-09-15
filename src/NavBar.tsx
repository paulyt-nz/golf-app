import React from 'react'
import { Typography, AppBar, Toolbar, Button} from '@mui/material';

interface NavBarProps {
    toggleScorecard: () => void;
    scorecard: number[][]
    reset: () => void;
}


function NavBar({ toggleScorecard, scorecard, reset }: NavBarProps) {

    const handleScorecard = () => {
        toggleScorecard()
    }

    const handleReset = () => {
        reset()
        console.debug('inside handleReset in NavBar')
    }

    return (
        <AppBar color='secondary' position='static' style={{ height: "64px" }}>
            <Toolbar style={{position: "relative"}}>
                <Typography style={{float: "left"}} color='inherit'>WHACKF*#K</Typography>
                <Button style={{float: "right"}} onClick={handleScorecard} color="inherit">Scorecard</Button>
                <Button style={{float: "right"}} onClick={handleReset} color="inherit">RESET</Button>
            </Toolbar>
        </AppBar>
)
}

export default NavBar