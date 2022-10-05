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

    // make an array of holes names for tablehead
    let tableHeadArray = courseInfo.holes.map((hole : any) => hole.name)
    let tableHead

    if (round === '18-fullround' || round === '9-once'){
        tableHead = [...tableHeadArray]
    } else if (round === '9-front'){
        tableHead = tableHeadArray.slice(0,9)
    } else if (round === '9-back'){
        tableHead = tableHeadArray.slice(9)
    } else { // round twice on a nine hole
        tableHead = [...tableHeadArray, ...tableHeadArray]    // double check this one will work
    }
    
    const frontNine: JSX.Element  = (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                <TableRow>
                    <TableCell>{firstCell}</TableCell>

                    {tableHead.map((head: any) => 
                        <TableCell align="right">{head}</TableCell>      // THIS IS MY FIRST ISSUE - need to make the holes line up with the round we have selected
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
