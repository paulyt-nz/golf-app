import React from 'react'
import { TableCell, TableRow } from '@mui/material';
import { Player, Scorecard } from './commonTypes'

interface PlayerRowProps {
    scorecard: Scorecard
    player: Player
    playerIndex: number
}

function PlayerRow({scorecard, player, playerIndex}: PlayerRowProps) : JSX.Element {

    const sumScores = (playerIndex: number, scorecard: Scorecard) => {
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