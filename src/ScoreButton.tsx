import React, {useState} from 'react'
import { Typography, Paper, ListItem, Divider, Button, IconButton } from '@mui/material';

interface ScoreButtonProps {
    playerIndex: number;
    updateScorecard: (score: number, playerIndex: number, holeIndex: number) => void;
    holeIndex: number;
    score: number;
    isButtonSelected: boolean[][]
    selectThisButtonAndDeselectTheRestOfThem: (indexOfThisButton: number, playerIndex: number) => void;
    buttonIndex: number
}



function ScoreButton( {playerIndex, updateScorecard, holeIndex, score, isButtonSelected, selectThisButtonAndDeselectTheRestOfThem, buttonIndex }: ScoreButtonProps) {
    
    // const [isSelected, toggleIsSelected] = useState(true)

    const handleClick = () => {
        console.log('******  start of ScoreButton handleclick  ******')
        updateScorecard(score, playerIndex, holeIndex);
        selectThisButtonAndDeselectTheRestOfThem(buttonIndex, playerIndex);
        console.log('******  end of ScoreButton handleclick  ******')
    }

    console.log(isButtonSelected[playerIndex][buttonIndex])
    
    return(
        <Button variant={isButtonSelected[playerIndex][buttonIndex] ? "contained" : "outlined"} onClick={handleClick}>{score}</Button>
    )

}

export default ScoreButton