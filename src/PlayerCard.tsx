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

    return(
        <Paper style={{marginBottom: '1rem'}}>
            <ListItem style={{ height: "64px" }}>{playerName}</ListItem>
            
            <Divider />

            <ListItem style={listItemStyles}> 
               
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isButtonSelected={isButtonSelected} score={3} useSelectThisButtonAndDeselectTheRestOfThem={useSelectThisButtonAndDeselectTheRestOfThem} buttonIndex={0} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isButtonSelected={isButtonSelected} score={4} useSelectThisButtonAndDeselectTheRestOfThem={useSelectThisButtonAndDeselectTheRestOfThem} buttonIndex={1} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isButtonSelected={isButtonSelected} score={5} useSelectThisButtonAndDeselectTheRestOfThem={useSelectThisButtonAndDeselectTheRestOfThem} buttonIndex={2} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isButtonSelected={isButtonSelected} score={6} useSelectThisButtonAndDeselectTheRestOfThem={useSelectThisButtonAndDeselectTheRestOfThem} buttonIndex={3} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isButtonSelected={isButtonSelected} score={7} useSelectThisButtonAndDeselectTheRestOfThem={useSelectThisButtonAndDeselectTheRestOfThem} buttonIndex={4} />
                <ScoreButton playerIndex={playerIndex} updateScorecard={updateScorecard} holeIndex={holeIndex} isButtonSelected={isButtonSelected} score={8} useSelectThisButtonAndDeselectTheRestOfThem={useSelectThisButtonAndDeselectTheRestOfThem} buttonIndex={5} />
                               
            </ListItem>
            
        </Paper>
    )

}

export default PlayerCard