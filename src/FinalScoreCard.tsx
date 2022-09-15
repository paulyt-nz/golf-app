import React from 'react';
import { Course } from './initialValues'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface FinalScoreCardProps {
    scorecard: number[][]
    players: string[]
    courseInfo: Course
}

function FinalScoreCard({scorecard, players, courseInfo}: FinalScoreCardProps) {
    // render out a table with everyones scores for each hole and overall score and par comparisons

    const sumScores = (playerIndex: number, scorecard: number[][]) => {
        let sum = 0;
        for(let scores of scorecard) {
            sum = sum + scores[playerIndex];
        }
        return sum;
    }


    // will also need to drop the navbar scorecard button when a round is completed
    return (
        <>
        {/* <h2>Final Scorecard!</h2>
        <p>{scorecard[0]}</p>
            <p>{scorecard[1]}</p>
            <p>{scorecard[2]}</p>
            <p>{scorecard[3]}</p>
            <p>{scorecard[4]}</p>
            <p>{scorecard[5]}</p>
            <p>{scorecard[6]}</p>
            <p>{scorecard[7]}</p>
            <p>{scorecard[8]}</p> */}
        


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                    <TableRow>
                        <TableCell>{courseInfo.name}</TableCell>

                        {courseInfo.holes.map((hole: any) => 
                            <TableCell align="right">{hole.name}</TableCell>
                        )}
                        <TableCell>Total</TableCell>
                    </TableRow>
                    </TableHead>

                    <TableBody>
                   
                        <TableRow key="asdfasdf" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{players[0]}</TableCell>
                            {scorecard.map((holeScores) =>
                                <TableCell align="right">{holeScores[0] ? holeScores[0] : '-'}</TableCell>
                            )}
                            <TableCell align="right">{sumScores(0,scorecard)}</TableCell>      
                        </TableRow>

                        <TableRow key="asdfasdf" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{players[1]}</TableCell>
                            {scorecard.map((holeScores) =>
                                <TableCell align="right">{holeScores[1] ? holeScores[1] : '-'}</TableCell>
                            )}
                            <TableCell align="right">{sumScores(1,scorecard)}</TableCell>       
                        </TableRow>

                        <TableRow key="asdfasdf" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{players[2]}</TableCell>
                            {scorecard.map((holeScores) =>
                                <TableCell align="right">{holeScores[2] ? holeScores[2] : '-'}</TableCell>
                            )}
                            <TableCell align="right">{sumScores(2,scorecard)}</TableCell>    
                        </TableRow>

                        <TableRow key="asdfasdf" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{players[3]}</TableCell>
                            {scorecard.map((holeScores) =>
                                <TableCell align="right">{holeScores[3] ? holeScores[3] : '-'}</TableCell>
                            )}
                            <TableCell align="right">{sumScores(3,scorecard)}</TableCell>   
                        </TableRow>
                    
                    </TableBody>
                </Table>
            </TableContainer>
        </>
 
    )

}

export default FinalScoreCard
