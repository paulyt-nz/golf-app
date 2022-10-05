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
    round: string
}

function FinalScoreCard({scorecard, players, courseInfo, numHoles, round}: FinalScoreCardProps): JSX.Element {
    
    const frontNine: JSX.Element  = (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                <TableRow>
                    <TableCell>Front Nine</TableCell>

                    {courseInfo.holes.map((hole: any) => 
                        <TableCell align="right">{hole.name}</TableCell>      // THIS IS MY FIRST ISSUE - need to make the holes line up with the round we have selected
                    )}
                    <TableCell align="right">Total</TableCell>
                </TableRow>
                </TableHead>

                <TableBody>                      
                    {players.map((player, i) => 
                        <PlayerRow 
                            scorecard={scorecard} 
                            player={player} 
                            playerIndex={i} 
                            round={round}
                            numHoles={numHoles}
                        />
                    )}                  
                </TableBody>

            </Table>
        </TableContainer>
    )

    // const backNine: JSX.Element = (
    //     <TableContainer component={Paper}>
    //         <Table sx={{ minWidth: 650 }} aria-label="simple table">

    //             <TableHead>
    //             <TableRow>
    //                 <TableCell>Back Nine</TableCell>

    //                 {courseInfo.holes.map((hole: any) => 
    //                     <TableCell align="right">{hole.name}</TableCell>              // THIS IS MY FIRST ISSUE
    //                 )}

    //                 <TableCell align="right">Total</TableCell>
    //             </TableRow>
    //             </TableHead>

    //             <TableBody>                      
    //                 {players.map((player, i) => 
    //                     <PlayerRow scorecard={scorecard} player={player} playerIndex={i} />
    //                 )}                  
    //             </TableBody>

    //         </Table>
    //     </TableContainer>
    // )

    return (
        <>
            <Paper>
                {courseInfo.name}
            </Paper>

            {frontNine}

            {/* {backNine} */}
                     
        </>
 
    )

}

export default FinalScoreCard
