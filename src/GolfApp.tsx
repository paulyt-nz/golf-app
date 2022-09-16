import React, { useState } from 'react'
import { initialCourse, initialPlayers, initialScorecard, blankScorecard } from './initialValues'
import MainScorecardDisplay from './MainScorecardDisplay';
import NavBar from './NavBar';

import { Typography, Paper, AppBar, Toolbar, Grid, ListItem, Divider, Card, CardHeader, CardContent } from '@mui/material';
import RoundSetUpForm from './RoundSetUpForm';
import FinalScoreCard from './FinalScoreCard';
//import { useForceUpdate } from './useForceUpdate'

// need to keep a few things in state and a few things can be set to props(? - state or props for players names)
// State:
    // round info - set once and will not change until reset - wipe clean on reset
    //      - course
    //      - players
    //      - 9 or 18 holes 
    // current hole
    // scores of previous holes - update as you submit the scores for the current hole
    // isRoundSetUp - starts as false and renders setup form. When the form is submitted we can set it to false 
    // isRoundFinished - will need to make a final scorecard component that will show up at the end after the last hole
    // probably want one at the end of the front nine

    type HoleScores = []

    type Scorecard = HoleScores[]

// function useForceUpdate() {
//     const [value, setValue] = useState(0); // integer state
//     console.log('value from useForceUpdate: ', value)
//     return () => setValue(value => value + 1); // update state to force render
//     // An function that increment 👆🏻 the previous state like here 
//     // is better than directly setting `value + 1`
// }
    


function GolfApp() {

    const allButtonsNotSelected = [
        [false,false,false,false,false,false], 
        [false,false,false,false,false,false], 
        [false,false,false,false,false,false], 
        [false,false,false,false,false,false], 
    ]

    const [currentHoleIndex, setCurrentHoleIndex] = useState(0)
    const [isRoundSetUp, setIsRoundSetUp] = useState(true)
    const [showScorecard, setShowScorecard] = useState(false)
    const [courseInfo, setCourseInfo] = useState(initialCourse)
    const [players, setPlayers] = useState(initialPlayers)
    const [scorecard, setScorecard] = useState(initialScorecard)
    const [isButtonSelected, setIsButtonSelected] = useState(allButtonsNotSelected)
    const [value, setValue] = useState(0);

// Thoughts on some functions that may be needed
//      - setUpRound - sets the players and course info for the round and generates a new blank scorecard
//      - nextHole - saves the scores of the current hole and adds one to currentHoleIndex.
//                   Also needs to toggle showscorecard when currenthole is greater than holes being played
//      - resetRound - resets all state values back to their default

    const updateScorecard = (score: number, playerIndex: number, holeIndex: number) => {
        console.log('^^^^^^  start of updateScorecard  ^^^^^^')
        let newScorecard = scorecard;
        newScorecard[holeIndex][playerIndex] = score;
        console.log('inside update scorecard', holeIndex, playerIndex)
        console.log(newScorecard)
        setScorecard(newScorecard)
        console.log(scorecard)
        console.log('^^^^^^  end of updateScorecard  ^^^^^^')
    }

    const useSelectThisButtonAndDeselectTheRestOfThem = (indexOfThisButton: number, playerIndex: number) => {
        console.log("%%%%%%%  start of selectThisButtonAndDeselectTheRestOfThem %%%%%%")
        console.log(isButtonSelected)

        let newButtonsSelected = isButtonSelected
        newButtonsSelected[playerIndex] = [ false, false, false, false, false, false]
        newButtonsSelected[playerIndex][indexOfThisButton] = true
        console.log(newButtonsSelected)

        setIsButtonSelected(newButtonsSelected)
        setValue(value => value + 1)

        console.log("%%%%%%%  end of selectThisButtonAndDeselectTheRestOfThem %%%%%%")
    }

    const nextHole = (currentHoleIndex: number, scorecard: number[][]) => {
        // needs to check there are no zero entrys in the current round
        let isThereEmptyScores = scorecard[currentHoleIndex].some(score => score === 0) // should give true or false
        if (isThereEmptyScores) {
            return alert('Need to check all the players scores')  // can make a better system for this later
        }

        // if no zeros then we add one to the currentHoleIndex
        
        if (currentHoleIndex < courseInfo.numHoles - 1) {
            setCurrentHoleIndex(currentHoleIndex + 1);
            console.debug("running in nexHole - after incrementing current hole")
            console.debug("current hole index: ", currentHoleIndex)
            console.debug("numHoles: ", courseInfo.numHoles)
        } else {
            console.debug("running in nextHole - just before toggleScorecard")
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
       // setIsRoundSetUp(false) // will need this for my set up form
       // setPlayers([])
       // setCourseInfo(not sure what goes here)
       const blankScorecard = [ // need to figure out why this wouldnt work as planned
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
    }




    // Conditional rendering of main page
    let mainPageRender;

    if (isRoundSetUp === false) {
        mainPageRender = <RoundSetUpForm />
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

    const paperStyles: React.CSSProperties = {
        padding: 0,
        margin: 0,
        height: "100%", // may need to go back to 100vh 
        backgroundColor: "#fafafa",
    }




    return(
        <Paper style={paperStyles}elevation={0}>
            <NavBar toggleScorecard={toggleScorecard} scorecard={scorecard} reset={reset} />            
            {mainPageRender}
        </Paper>
    )
}

export default GolfApp;