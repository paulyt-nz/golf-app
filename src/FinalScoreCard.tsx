import React from 'react';
import { Course } from './initialValues'
import PlayerRow from './PlayerRow'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Player, Scorecard } from './commonTypes'

interface FinalScoreCardProps {
    scorecard: Scorecard
    players: Player[]
    courseInfo: Course
}

function FinalScoreCard({scorecard, players, courseInfo}: FinalScoreCardProps): JSX.Element {
    // render out a table with everyones scores for each hole and overall score and par comparisons

    // will also need to drop the navbar scorecard button when a round is completed
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                    <TableRow>
                        <TableCell>{courseInfo.name}</TableCell>

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
        </>
 
    )

}

export default FinalScoreCard
