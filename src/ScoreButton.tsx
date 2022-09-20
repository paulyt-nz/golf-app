
import { Button } from '@mui/material';


interface ScoreButtonProps {
    playerIndex: number;
    updateScorecard: (score: number, playerIndex: number, holeIndex: number) => void;
    holeIndex: number;
    score: number;
    isButtonSelected: boolean[][]
    useSelectThisButtonAndDeselectTheRestOfThem: (indexOfThisButton: number, playerIndex: number) => void;
    buttonIndex: number
}


function ScoreButton( {playerIndex, updateScorecard, holeIndex, score, isButtonSelected, useSelectThisButtonAndDeselectTheRestOfThem, buttonIndex }: ScoreButtonProps) {

    const useHandleClick = () => {
        updateScorecard(score, playerIndex, holeIndex);
        useSelectThisButtonAndDeselectTheRestOfThem(buttonIndex, playerIndex);
    }
    
    return(
        <Button variant={ isButtonSelected[playerIndex][buttonIndex] ? "contained" : "outlined"} onClick={useHandleClick}>{score}</Button>
    )

}

export default ScoreButton