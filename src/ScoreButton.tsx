import React, {useState} from 'react'
import { Typography, Paper, ListItem, Divider, Button, IconButton } from '@mui/material';


interface ScoreButtonProps {
    playerIndex: number;
    updateScorecard: (score: number, playerIndex: number, holeIndex: number) => void;
    holeIndex: number;
    score: number;
    isButtonSelected: boolean[][]
    useSelectThisButtonAndDeselectTheRestOfThem: (indexOfThisButton: number, playerIndex: number) => void;
    buttonIndex: number
}

// function useForceUpdate() {
//     const [value, setValue] = useState(0); // integer state
//     console.log('value from useForceUpdate: ', value)
//     return () => setValue(value => value + 1); // update state to force render
//     // An function that increment 👆🏻 the previous state like here 
//     // is better than directly setting `value + 1`
// }


function ScoreButton( {playerIndex, updateScorecard, holeIndex, score, isButtonSelected, useSelectThisButtonAndDeselectTheRestOfThem, buttonIndex }: ScoreButtonProps) {
    
    // const [isThisOneSelected, setIsThisOneSelected] = useState(false)

    const useHandleClick = () => {
        console.log('******  start of ScoreButton handleclick  ******')
        updateScorecard(score, playerIndex, holeIndex);
        useSelectThisButtonAndDeselectTheRestOfThem(buttonIndex, playerIndex);
        //setIsThisOneSelected(isButtonSelected[playerIndex][buttonIndex])
        // useForceUpdate()
        console.log('******  end of ScoreButton handleclick  ******')
    }

    console.log(isButtonSelected[playerIndex][buttonIndex])
    
    return(
        <Button variant={ isButtonSelected[playerIndex][buttonIndex] ? "contained" : "outlined"} onClick={useHandleClick}>{score}</Button>
    )

}

export default ScoreButton