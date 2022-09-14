import React, { useState } from 'react'
import { Typography, Paper, ListItem, Divider, Button, IconButton } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ScoreButton from './ScoreButton';

interface PlayerCardProps {
    playerName: string,
    playerIndex: number,
    updateScorecard: (score: number, playerIndex: number, holeIndex: number) => void,
    holeIndex: number
}


function PlayerCard({ playerName, playerIndex, updateScorecard, holeIndex }: PlayerCardProps) {
    const [playerScore, setPlayerScore] = useState(0);

    const savePlayerScore = (score: number) => {
        setPlayerScore(score);
        // add in some sort of disabling of the other buttons here
        console.log('player score is: ', playerScore) //very slow to update.....
    }

    const listItemStyles = {
        height: "64px",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-evenly"
    }

    return(
        <Paper style={{marginBottom: '1rem'}}>
            <ListItem style={{ height: "64px" }}>{playerName}</ListItem>
            {/* want it to say Front 9: 50 +10 - Back 9 (3) */}
                <Divider />
            <ListItem style={listItemStyles}> 
                {/* change the button variant to "contained" when it is selected */}
                {/* <Button variant="outlined">1</Button>
                <Button variant="outlined">2</Button> */}
                {/* these need to show up when you hit the arrows */}
                {/* <IconButton variant="outlined">
                            <KeyboardArrowLeftIcon />
                </IconButton>                 cant get these ones working for some reason*/}

                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} score={3} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} score={4} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} score={5} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} score={6} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} score={7} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} score={8} />
                               
                {/* Need to make these extra ones show up when needed */}
                {/* <Button variant="outlined">9</Button>
                <Button variant="outlined">10</Button> */}
            </ListItem>
            {/* this one needs to have buttons for all the shots  */}
        </Paper>
    )

}

export default PlayerCard