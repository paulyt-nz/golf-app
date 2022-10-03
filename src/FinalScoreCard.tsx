import React from 'react';
import { Course } from './initialValues'
import PlayerRow from './PlayerRow'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Player, Scorecard, NumHoles } from './commonTypes'

interface FinalScoreCardProps {
    scorecard: Scorecard
    players: Player[]
    courseInfo: Course
    numHoles: NumHoles
}

function FinalScoreCard({scorecard, players, courseInfo, numHoles}: FinalScoreCardProps): JSX.Element {
    
    const frontNine: JSX.Element  = (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                <TableRow>
                    <TableCell>Front Nine</TableCell>

                    {courseInfo.holes.map((hole: any) => 
                        <TableCell align="right">{hole.name}</TableCell>
                    )}
                    <TableCell align="right">Total</TableCell>
                </TableRow>
                </TableHead>

                <TableBody>                      
                    {players.map((player, i) => 
                        <PlayerRow scorecard={scorecard} player={player} playerIndex={i} />
                    )}                  
                </TableBody>

            </Table>
        </TableContainer>
    )

    const backNine: JSX.Element = (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                <TableRow>
                    <TableCell>Back Nine</TableCell>

                    {courseInfo.holes.map((hole: any) => 
                        <TableCell align="right">{hole.name}</TableCell>
                    )}
                    <TableCell align="right">Total</TableCell>
                </TableRow>
                </TableHead>

                <TableBody>                      
                    {players.map((player, i) => 
                        <PlayerRow scorecard={scorecard} player={player} playerIndex={i} />
                    )}                  
                </TableBody>

            </Table>
        </TableContainer>
    )

    return (
        <>
            <Paper>
                {courseInfo.name}
            </Paper>

            {frontNine}

            {backNine}
                     
        </>
 
    )

}

export default FinalScoreCard
