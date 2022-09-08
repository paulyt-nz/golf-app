import React from 'react'
import { initialCourse, initialPlayers, scorecard } from './initialValues'
import PlayerCard from './PlayerCard'
import HoleInfoCard from './HoleInfoCard'

import { Typography, Paper, AppBar, Toolbar, Grid, ListItem, Divider, Card, CardHeader, CardContent } from '@mui/material';


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