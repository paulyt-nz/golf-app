import React, {useState} from 'react'
import { Typography, Paper, ListItem, Divider, Button, IconButton } from '@mui/material';

interface ScoreButtonProps {
    playerIndex: number;
    updateScorecard: (score: number, playerIndex: number, holeIndex: number) => void;
    holeIndex: number;
    score: number;
    isSelected: boolean
    selectThisButtonAndDeselectTheRestOfThem: (indexOfThisButton: number, playerIndex: number) => void;
    buttonIndex: number
}



function ScoreButton( {playerIndex, updateScorecard, holeIndex, score, isSelected, selectThisButtonAndDeselectTheRestOfThem, buttonIndex }: ScoreButtonProps) {
    
    // const [isSelected, toggleIsSelected] = useState(true)

    const handleClick = () => {
        updateScorecard(score, playerIndex, holeIndex);
        selectThisButtonAndDeselectTheRestOfThem(buttonIndex, playerIndex);
        console.log('inside handleclick')
    }
    
    return(
        <Button variant={isSelected ? "contained" : "outlined"} onClick={handleClick}>{score}</Button>
    )

}

export default ScoreButton