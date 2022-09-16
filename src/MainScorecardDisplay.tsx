import React from 'react';
import HoleInfoCard from './HoleInfoCard';
import PlayerCard from './PlayerCard';
import { Grid, Button } from '@mui/material';


interface MainScorecardDisplayProps {
    name: string;
    par: number;
    strokeIndex: number;
    tee: number;
    players: string[];
    updateScorecard: (score: number, playerIndex: number, holeIndex: number) => void;
    holeIndex: number;
    nextHole: (currentHoleIndex: number, scorecard: number[][]) => void;
    scorecard: number[][]
    useSelectThisButtonAndDeselectTheRestOfThem: (indexOfThisButton: number, playerIndex: number) => void;
    isButtonSelected: boolean[][]
}


function MainScorecardDisplay ({name, par, strokeIndex, tee, players, updateScorecard, holeIndex, nextHole, scorecard, useSelectThisButtonAndDeselectTheRestOfThem, isButtonSelected}: MainScorecardDisplayProps) {
    
    const gridStyles1: React.CSSProperties = { 
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "center",
    }

    const gridStyles2: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "stretch",
        width: '500px'
    }

    const handleClick = () => {
        nextHole(holeIndex, scorecard)
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
                
                {players.map((player, i) => (
                    <PlayerCard 
                        playerName={player}
                        playerIndex={i}
                        updateScorecard={updateScorecard}
                        holeIndex={holeIndex}
                        useSelectThisButtonAndDeselectTheRestOfThem={useSelectThisButtonAndDeselectTheRestOfThem}
                        isButtonSelected={isButtonSelected}
                    />
                ))}

                <Button style={{marginBottom: '1rem'}} variant="contained" onClick={handleClick}>
                        SAVE AND NEXT HOLE
                </Button>

            </Grid>
        </Grid>
    )

}

export default MainScorecardDisplay