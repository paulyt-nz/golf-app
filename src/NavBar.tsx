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
                <Typography style={{float: "left"}} color='inherit'>SHANKERS</Typography>
                <Button onClick={handleScorecard} color="inherit">Scorecard</Button>
                <Button onClick={handleReset} color="inherit">RESET</Button>
            </Toolbar>
        </AppBar>
)
}

export default NavBar