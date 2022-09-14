import React, {useState} from 'react'
import { Typography, Paper, ListItem, Divider, Button, IconButton } from '@mui/material';

interface ScoreButtonProps {
    playerIndex: number;
    updateScorecard: (score: number, playerIndex: number, holeIndex: number) => void;
    holeIndex: number;
    score: number;
}



function ScoreButton({playerIndex, updateScorecard, holeIndex, score}: ScoreButtonProps) {
    
    const [isSelected, toggleIsSelected] = useState(true)

    const handleClick = () => {
        updateScorecard(score, playerIndex, holeIndex);
        toggleIsSelected(!isSelected);
        console.log('inside handleclick')
    }
    
    return(
        <Button variant={isSelected ? "outlined" : "contained"} onClick={handleClick}>{score}</Button>
    )

}

export default ScoreButton