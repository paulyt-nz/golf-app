import React, { useState } from 'react'
import { Paper, ListItem, Divider } from '@mui/material';
import ScoreButton from './ScoreButton';

interface PlayerCardProps {
    playerName: string,
    playerIndex: number,
    updateScorecard: (score: number, playerIndex: number, holeIndex: number) => void,
    holeIndex: number
    useSelectThisButtonAndDeselectTheRestOfThem: (indexOfThisButton: number, playerIndex: number) => void;
    isButtonSelected: boolean[][]
}

// lots more to add in here
//  - score so far
//  - +/- par so far
//  - last hole score
//
// Also need to sort out the buttons properly - more options, map over them

function PlayerCard({ playerName, playerIndex, updateScorecard, holeIndex, useSelectThisButtonAndDeselectTheRestOfThem, isButtonSelected }: PlayerCardProps) {
    const [isSelected, setIsSelected] = useState([false,false,false,false,false,false]);

    const listItemStyles = {
        height: "64px",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-evenly"
    }

    const buttonScores = [ 3, 4, 5, 6, 7, 8]

    return(
        <Paper style={{marginBottom: '1rem'}}>
            <ListItem style={{ height: "64px" }}>{playerName}</ListItem>
            
            <Divider />

            <ListItem style={listItemStyles}> 
               
                {buttonScores.map((buttonScore, i) => (
                    <ScoreButton 
                        playerIndex={playerIndex} 
                        updateScorecard={updateScorecard} 
                        holeIndex={holeIndex} 
                        isButtonSelected={isButtonSelected} 
                        score={buttonScore} 
                        useSelectThisButtonAndDeselectTheRestOfThem={useSelectThisButtonAndDeselectTheRestOfThem} 
                        buttonIndex={i} />
                ))}

            </ListItem>
            
        </Paper>
    )

}

export default PlayerCard