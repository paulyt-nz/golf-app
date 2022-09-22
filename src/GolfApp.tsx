import React, { useState } from 'react'
import { pauatahanui, initialButtonState } from './initialValues'
import MainScorecardDisplay from './MainScorecardDisplay';
import NavBar from './NavBar';

import { Paper } from '@mui/material';
import RoundSetUpForm from './RoundSetUpForm';
import FinalScoreCard from './FinalScoreCard';
import { Player, Scorecard, NumHoles, Course, ButtonState } from './commonTypes'


function GolfApp(): JSX.Element {

// *************************************************************************************//
// State    

    const [currentHoleIndex, setCurrentHoleIndex]   = useState(0)
    const [isRoundSetUp, setIsRoundSetUp]           = useState(false)
    const [showScorecard, setShowScorecard]         = useState(false)
    const [courseInfo, setCourseInfo]               = useState<Course>(pauatahanui)
    const [players, setPlayers]                     = useState<Player[]>([])
    const [scorecard, setScorecard]                 = useState<Scorecard>([]) 
    const [isButtonSelected, setIsButtonSelected]   = useState<ButtonState>(initialButtonState)
    const [numHoles , setNumHoles]                  = useState<NumHoles>(9)

    const [value, setValue] = useState(0);

// *************************************************************************************//
// Functions

    const updateScorecard = (score: number, playerIndex: number, holeIndex: number) => {
        console.log('############ START OF updateScorecard  ###############')
        console.log("score: ", score)
        console.log("playerIndex: ", playerIndex)
        console.log("holeIndex: ", holeIndex)
        console.log('scorecard: ', scorecard)

        let newScorecard = [...scorecard];
        newScorecard[holeIndex][playerIndex] = score;

        console.log('new scorecard: ', newScorecard)
        setScorecard(newScorecard)

        console.log('############   END OF updateScorecard  ###############')
    }

    const useSelectThisButtonAndDeselectTheRestOfThem = (indexOfThisButton: number, playerIndex: number) => {
        let newButtonsSelected = isButtonSelected
        newButtonsSelected[playerIndex] = [ false, false, false, false, false, false]
        newButtonsSelected[playerIndex][indexOfThisButton] = true
        setIsButtonSelected(newButtonsSelected)
        setValue(value => value + 1)
    }

    const nextHole = (currentHoleIndex: number, scorecard: Scorecard) => {
        let isThereEmptyScores = scorecard[currentHoleIndex].some(score => score === 0) // should give true or false
        if (isThereEmptyScores) {
            return alert('Oi, check all the players scores!')  // can make a better system for this later
        }
        if (currentHoleIndex < courseInfo.numHoles - 1) {
            setCurrentHoleIndex(currentHoleIndex + 1);
        } else {
            toggleScorecard()
        }

        const resetButtons = createBlankButtonStateArray(players.length)
        setIsButtonSelected(resetButtons);
    }

    const toggleScorecard = () => {
        setShowScorecard(!showScorecard)
    }

    const reset = () => {        
        setCurrentHoleIndex(0);
        setShowScorecard(false)
        let blankButtonStateArray = createBlankButtonStateArray(4)
        setIsButtonSelected(blankButtonStateArray)
        setIsRoundSetUp(false)
        setPlayers([])
        setScorecard([])
    }

    const addPlayerToRound = (newPlayerName: Player): void => {
        let newPlayers = [...players, newPlayerName]
        setPlayers(newPlayers)
        // setValue(value => value + 1)
    }

    const startNewRound = (numPlayers: number, numHoles: number): void => {
        setIsRoundSetUp(true)
        console.log('scorecard: ', scorecard)
        let newScorecard = createBlankScorecardArray(numPlayers, numHoles)
        setScorecard(newScorecard)
        let blankButtonStateArray = createBlankButtonStateArray(numPlayers)
        setIsButtonSelected(blankButtonStateArray)
        setValue(value => value + 1)
    }

    const createBlankScorecardArray = (numPlayers: number, numHoles: number): Scorecard => {
        // let holeScores = new Array(numPlayers).fill(0);
        let blankScorecard = new Array(numHoles).fill(0).map(i =>  new Array(numPlayers).fill(0));
        return blankScorecard
    }

    const createBlankButtonStateArray = (numPlayers: number): ButtonState => {
        let playerButtons = new Array(6).fill(false);
        let blankButtonArray = new Array(numPlayers).fill(playerButtons);
        return blankButtonArray
    }

    const generateNewScorecard = (numPlayers: number, numHoles: number): void => {
        // loop through numHoles and players making an array of arrays of 0
        let newScorecard = createBlankScorecardArray(numPlayers, numHoles)
        setScorecard(newScorecard)
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
            startNewRound={startNewRound}
            generateNewScorecard={generateNewScorecard}
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