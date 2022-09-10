import React from 'react'
import { initialCourse, initialPlayers, scorecard } from './initialValues'
import PlayerCard from './PlayerCard'
import HoleInfoCard from './HoleInfoCard'

import { Typography, Paper, AppBar, Toolbar, Grid, ListItem, Divider, Card, CardHeader, CardContent } from '@mui/material';
import MainScorecardDisplay from './MainScorecardDisplay';

// need to keep a few things in state and a few things can be set to props(? - state or props for players names)
// State:
    // round info - set once and will not change until reset - wipe clean on reset
    //      - course
    //      - players
        // - 9 or 18 holes 
    // current hole
    // scores of previous holes - update as you submit the scores for the current hole
    // isRoundSetUp - starts as false and renders setup form. When the form is submitted we can set it to false 
    // isRoundFinished - will need to make a final scorecard component that will show up at the end after the last hole
    // probably want one at the end of the front nine



function GolfApp() {
    
    let currentHoleIndex = 3;

    return(
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa",
               
            }}
            elevation={0}
        >
            <AppBar color='secondary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>SHANKERS</Typography>
                </Toolbar>
            </AppBar>

        
            <Grid container style={{ 
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: 'flex-start',
                alignItems: "center",
            }}>
                <Grid item xs={11} md={8} lg={4} style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'flex-start',
                    alignItems: "stretch",
                    width: '500px'
                }}>
                    
                    <MainScorecardDisplay />

                    <HoleInfoCard
                        name={initialCourse.holes[currentHoleIndex].name} 
                        par={initialCourse.holes[currentHoleIndex].par}
                        strokeIndex={initialCourse.holes[currentHoleIndex].strokeIndex}
                        tee={initialCourse.holes[currentHoleIndex].tee}
                    ></HoleInfoCard>
                    
                    {initialPlayers.map((player, i) => (
                        <PlayerCard 
                            player={player}
                            // currentHole
                        />
                    ))}

                </Grid>
            </Grid>
        </Paper>
    )
}

export default GolfApp;