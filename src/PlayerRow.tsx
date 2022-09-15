import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface PlayerRowProps {
    scorecard: number[][]
    player: string
    playerIndex: number
}

function PlayerRow({scorecard, player, playerIndex}: PlayerRowProps) {

    const sumScores = (playerIndex: number, scorecard: number[][]) => {
        let sum = 0;
        for(let scores of scorecard) {
            sum = sum + scores[playerIndex];
        }
        return sum;
    }

    return(
        <TableRow key={player}>
            <TableCell component="th" scope="row">{player}</TableCell>
                {scorecard.map((holeScores) =>
                    <TableCell align="right">{holeScores[playerIndex] ? holeScores[playerIndex] : '-'}</TableCell>
                )}
            <TableCell align="right">{sumScores( playerIndex, scorecard )}</TableCell>      
        </TableRow>
    )
}

export default PlayerRow