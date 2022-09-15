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
    selectThisButtonAndDeselectTheRestOfThem: (indexOfThisButton: number, playerIndex: number) => void;
    isButtonSelected: boolean[]
}


function PlayerCard({ playerName, playerIndex, updateScorecard, holeIndex, selectThisButtonAndDeselectTheRestOfThem, isButtonSelected }: PlayerCardProps) {
    const [isSelected, setIsSelected] = useState([false,false,false,false,false,false]);

    // will need a function that disables or changes the other buttons when one is selected
    // const selectThisButtonAndDeselectTheRestOfThem = (indexOfThisButton: number) => {
    //     let newSelected = [false,false,false,false,false,false];
    //     newSelected[indexOfThisButton] = true;
    //     setIsSelected(newSelected)
    // }




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

                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isSelected={isButtonSelected[0]} score={3} selectThisButtonAndDeselectTheRestOfThem={selectThisButtonAndDeselectTheRestOfThem} buttonIndex={0} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isSelected={isButtonSelected[1]} score={4} selectThisButtonAndDeselectTheRestOfThem={selectThisButtonAndDeselectTheRestOfThem} buttonIndex={1} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isSelected={isButtonSelected[2]} score={5} selectThisButtonAndDeselectTheRestOfThem={selectThisButtonAndDeselectTheRestOfThem} buttonIndex={2} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isSelected={isButtonSelected[3]} score={6} selectThisButtonAndDeselectTheRestOfThem={selectThisButtonAndDeselectTheRestOfThem} buttonIndex={3} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isSelected={isButtonSelected[4]} score={7} selectThisButtonAndDeselectTheRestOfThem={selectThisButtonAndDeselectTheRestOfThem} buttonIndex={4} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isSelected={isButtonSelected[5]} score={8} selectThisButtonAndDeselectTheRestOfThem={selectThisButtonAndDeselectTheRestOfThem} buttonIndex={5} />
                               
                {/* Need to make these extra ones show up when needed */}
                {/* <Button variant="outlined">9</Button>
                <Button variant="outlined">10</Button> */}
            </ListItem>
            {/* this one needs to have buttons for all the shots  */}
        </Paper>
    )

}

export default PlayerCard