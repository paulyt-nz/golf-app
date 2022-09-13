import React, { useState } from 'react'
import { initialCourse, initialPlayers, scorecard } from './initialValues'
import MainScorecardDisplay from './MainScorecardDisplay';
import NavBar from './NavBar';

import { Typography, Paper, AppBar, Toolbar, Grid, ListItem, Divider, Card, CardHeader, CardContent } from '@mui/material';
import RoundSetUpForm from './RoundSetUpForm';
import FinalScoreCard from './FinalScoreCard';

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



function GolfApp() {
    const [currentHoleIndex, setCurrentHoleIndex] = useState(3)
    const [isRoundSetUp, toggleIsRoundSetUp] = useState(true)
    const [showScorecard, toggleShowScorecard] = useState(false)
    const [courseInfo, setCourseInfo] = useState(initialCourse)
    const [players, setPlayers] = useState(initialPlayers)

// Thoughts on some functions that may be needed
//      - setUpRound - sets the players and course info for the round and generates a new blank scorecard
//      - nextHole - saves the scores of the current hole and adds one to currentHoleIndex.
//                   Also needs to toggle showscorecard when currenthole is greater than holes being played
//      - resetRound - resets all state values back to their default




    // Conditional rendering of main page
    let mainPageRender;

    if (isRoundSetUp === false) {
        mainPageRender = <RoundSetUpForm />
    } else if (showScorecard === true) {
        mainPageRender = <FinalScoreCard />
    } else {
        mainPageRender = (<MainScorecardDisplay 
            name={courseInfo.holes[currentHoleIndex].name} 
            par={courseInfo.holes[currentHoleIndex].par}
            strokeIndex={courseInfo.holes[currentHoleIndex].strokeIndex}
            tee={courseInfo.holes[currentHoleIndex].tee}
            players={players}
            />)
    }

    const paperStyles: React.CSSProperties = {
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
    }

    return(
        <Paper style={paperStyles}elevation={0}>
            <NavBar />            
            {mainPageRender}
        </Paper>
    )
}

export default GolfApp;