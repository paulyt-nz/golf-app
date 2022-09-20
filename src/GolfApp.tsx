import React, { useState } from 'react'
import { initialCourse, pauatahanui, initialPlayers, initialScorecard, allButtonsNotSelected } from './initialValues'
import MainScorecardDisplay from './MainScorecardDisplay';
import NavBar from './NavBar';

import { Paper } from '@mui/material';
import RoundSetUpForm from './RoundSetUpForm';
import FinalScoreCard from './FinalScoreCard';


function GolfApp() {

// *************************************************************************************//
// State    

    const [currentHoleIndex, setCurrentHoleIndex] = useState(0)
    const [isRoundSetUp, setIsRoundSetUp] = useState(false)
    const [showScorecard, setShowScorecard] = useState(false)
    const [courseInfo, setCourseInfo] = useState(pauatahanui)
    const [players, setPlayers] = useState(initialPlayers)
    const [scorecard, setScorecard] = useState(initialScorecard)
    const [isButtonSelected, setIsButtonSelected] = useState(allButtonsNotSelected)
    const [value, setValue] = useState(0);

// *************************************************************************************//
// Functions

    const updateScorecard = (score: number, playerIndex: number, holeIndex: number) => {
        let newScorecard = scorecard;
        newScorecard[holeIndex][playerIndex] = score;
        setScorecard(newScorecard)
    }

    const useSelectThisButtonAndDeselectTheRestOfThem = (indexOfThisButton: number, playerIndex: number) => {
        let newButtonsSelected = isButtonSelected
        newButtonsSelected[playerIndex] = [ false, false, false, false, false, false]
        newButtonsSelected[playerIndex][indexOfThisButton] = true
        setIsButtonSelected(newButtonsSelected)
        setValue(value => value + 1)
    }

    const nextHole = (currentHoleIndex: number, scorecard: number[][]) => {
        let isThereEmptyScores = scorecard[currentHoleIndex].some(score => score === 0) // should give true or false
        if (isThereEmptyScores) {
            return alert('Oi, check all the players scores!')  // can make a better system for this later
        }
        
        if (currentHoleIndex < courseInfo.numHoles - 1) {
            setCurrentHoleIndex(currentHoleIndex + 1);
        } else {
            toggleScorecard()
        }

        const resetButtons = [
            [false,false,false,false,false,false], 
            [false,false,false,false,false,false], 
            [false,false,false,false,false,false], 
            [false,false,false,false,false,false], 
        ]
        setIsButtonSelected(resetButtons);
        console.log('all buttons selected from nextHole(): ', allButtonsNotSelected)
    }

    const toggleScorecard = () => {
        setShowScorecard(!showScorecard)
    }

    const reset = () => {
        const blankScorecard = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        ]
        setCurrentHoleIndex(0);
        setScorecard(blankScorecard);
        setShowScorecard(false)
        console.log('all buttons not selected - inside reset(): ', allButtonsNotSelected )
        setIsButtonSelected(allButtonsNotSelected)
        setIsRoundSetUp(false)
        setPlayers([])
    }

    const addPlayerToRound = (newPlayerName: string): void => {
        let newPlayers = [...players, newPlayerName]
        setPlayers(newPlayers)
        // setValue(value => value + 1)
    }

    const submitRound = (): void => {
        setIsRoundSetUp(true)
    }

// *************************************************************************************//
// Styles

    const paperStyles: React.CSSProperties = {
        padding: 0,
        margin: 0,
        height: "100%", // may need to go back to 100vh 
        backgroundColor: "#fafafa",
    }

// *************************************************************************************//
// Conditional rendering of main page

    let mainPageRender;

    if (isRoundSetUp === false) {
        mainPageRender = <RoundSetUpForm 
            addPlayerToRound={addPlayerToRound}
            players={players}
            submitRound={submitRound}
            />

    } else if (showScorecard === true) {
        mainPageRender = <FinalScoreCard 
            courseInfo={courseInfo}
            players={players}
            scorecard={scorecard} 
            />

    } else {
        mainPageRender = (<MainScorecardDisplay 
            holeIndex={currentHoleIndex}
            name={courseInfo.holes[currentHoleIndex].name} 
            par={courseInfo.holes[currentHoleIndex].par}
            strokeIndex={courseInfo.holes[currentHoleIndex].strokeIndex}
            tee={courseInfo.holes[currentHoleIndex].tee}
            players={players}
            updateScorecard={updateScorecard}
            nextHole={nextHole}
            scorecard={scorecard}
            useSelectThisButtonAndDeselectTheRestOfThem={useSelectThisButtonAndDeselectTheRestOfThem}
            isButtonSelected={isButtonSelected}
            />)
    } 

// *************************************************************************************//
// Return

    return(
        <Paper style={paperStyles}elevation={0}>
            <NavBar toggleScorecard={toggleScorecard} scorecard={scorecard} reset={reset} />            
            {mainPageRender}
        </Paper>
    )
}

export default GolfApp;