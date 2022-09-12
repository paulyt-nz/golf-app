import React, { FC } from 'react';
import HoleInfoCard from './HoleInfoCard';
import PlayerCard from './PlayerCard';
import { Typography, Paper, AppBar, Toolbar, Grid, ListItem, Divider, Card, CardHeader, CardContent } from '@mui/material';

interface MainScorecardDisplayProps {
    name: string;
    par: number;
    strokeIndex: number;
    tee: number;
    players: string[]
}

function MainScorecardDisplay:FC<MainScorecardDisplayProps> ({name, par, strokeIndex, tee, players}) {
    // put the HoleInfoCards and PlayCards in here
    // want to only have the different options in the parent 
    const gridStyles1 = { 
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "center",
    }

    const gridStyles2 = {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "stretch",
        width: '500px'
    }

    return (
        <Grid container style={gridStyles1}>
            <Grid item xs={11} md={8} lg={4} style={gridStyles2}>
                <HoleInfoCard
                    name={name} 
                    par={par}
                    strokeIndex={strokeIndex}
                    tee={tee}
                ></HoleInfoCard>
                
                {players.map((player) => (
                    <PlayerCard 
                        player={player}
                        // currentHole
                    />
                ))}

            </Grid>
        </Grid>
    )

}

export default MainScorecardDisplay