import React, { useState, useEffect } from 'react';
import { Course } from './initialValues'
import PlayerRow from './PlayerRow'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Player, Scorecard, NumHoles, ScorecardOptions } from './commonTypes'

interface FinalScoreCardProps {
    scorecard: Scorecard
    players: Player[]
    courseInfo: Course | undefined
    numHoles: NumHoles
    round: string
    options: ScorecardOptions
    topScorecard: Scorecard
    bottomScorecard: Scorecard
}

function FinalScoreCard({scorecard, players, courseInfo, numHoles, round, options, topScorecard, bottomScorecard}: FinalScoreCardProps): JSX.Element {

     // *************************************************************************************//
    // Styles
    const titlePaper : React.CSSProperties = {
        margin: '5px', 
        textAlign: 'center'
    };

    const titleH1 : React.CSSProperties = {
        padding: '10px'
    }



    // *************************************************************************************//
    // Conditional Rendering of top and bottom card (based on round type)

    const topCard: JSX.Element  = (
        <TableContainer component={Paper} style={{margin: '5px'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                <TableRow>
                     <TableCell>{options.tableTitleTop}</TableCell>   {/*// make this condtional too - when I have front and back nine broken out */}

                    {options.tableHeadFirstNine.map((header: any) => 
                        <TableCell align="right">{header}</TableCell>      // THIS IS MY FIRST ISSUE - need to make the holes line up with the round we have selected
                    )}

                    <TableCell align="right">Total</TableCell>
                </TableRow>
                </TableHead>

                <TableBody>                      
                    {players.map((player, i) => 
                        <PlayerRow 
                            scorecard={topScorecard} // INTRODUCED A BUG HERE
                            player={player} 
                            playerIndex={i} 
                        />
                    )}                  
                </TableBody>

            </Table>
        </TableContainer>
    )

    let bottomCard: JSX.Element | null
    
    if (options.tableHeadSecondNine === null || options.tableTitleBottom === null) {
        bottomCard = null
    } else {
        bottomCard = (

            <TableContainer component={Paper} style={{margin: '5px'}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                    <TableRow>
                        <TableCell>{options.tableTitleBottom}</TableCell>
                        
                        {options.tableHeadSecondNine.map((header: any) => 
                            <TableCell align="right">{header}</TableCell>
                        )}

                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                    </TableHead>

                    <TableBody>                      
                        {players.map((player, i) => 
                            <PlayerRow 
                                scorecard={bottomScorecard} 
                                player={player} 
                                playerIndex={i} 
                            />
                        )}                  
                    </TableBody>

                </Table>
            </TableContainer>
        )
    }

    return (
        <>
            <Paper style={titlePaper}>
                <h1 style={titleH1}>{courseInfo === undefined ? "" : courseInfo.name}</h1>
            </Paper>

            {topCard}

            {bottomCard}   {/* set to null when playing nine holes */}
                     
        </>
 
    )

}

export default FinalScoreCard
