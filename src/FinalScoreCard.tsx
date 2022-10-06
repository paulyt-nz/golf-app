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

    interface ScorecardOptions {
        tableHeadFirstNine: string []
        tableHeadSecondNine: string [] | null
        tableTitleTop: string
        tableTitleBottom: string | null
        topScorecard: Scorecard
        bottomScorecard: Scorecard
    }
    
    const options : ScorecardOptions = {
        tableHeadFirstNine: [''],
        tableHeadSecondNine: null,
        tableTitleTop: '',
        tableTitleBottom: null,
        topScorecard: scorecard,
        bottomScorecard: scorecard
    }

    let tableHeadArray = courseInfo.holes.map((hole : any) => hole.name)

    if (round === '18-fullround') {

        options.tableHeadFirstNine = tableHeadArray.slice(0,9),
        options.tableHeadSecondNine = tableHeadArray.slice(9),
        options.tableTitleTop = "Front Nine",
        options.tableTitleBottom = "Back Nine",
        options.topScorecard = scorecard.slice(0,9),
        options.bottomScorecard = scorecard.slice(9)
        
    } else if (round === '9-once'){
        
        options.tableHeadFirstNine = tableHeadArray.slice(0,9),
        options.tableHeadSecondNine = null,
        options.tableTitleTop = "Front Nine",
        options.tableTitleBottom = null,
        options.topScorecard = scorecard,
        options.bottomScorecard = scorecard
        

    } else if (round === '9-front'){
        
        options.tableHeadFirstNine = tableHeadArray.slice(0,9),
        options.tableHeadSecondNine = null,
        options.tableTitleTop = "Front Nine",
        options.tableTitleBottom = null,
        options.topScorecard = scorecard,
        options.bottomScorecard = scorecard
        
    } else if (round === '9-back'){
        
        options.tableHeadFirstNine = tableHeadArray.slice(9),
        options.tableHeadSecondNine = null,
        options.tableTitleTop = "Back Nine",
        options.tableTitleBottom = null,
        options.topScorecard = scorecard,
        options.bottomScorecard = scorecard
        
    } else { // last one is round twice on a nine hole
        
        options.tableHeadFirstNine = [...tableHeadArray],
        options.tableHeadSecondNine =  [...tableHeadArray],
        options.tableTitleTop = "First Nine",
        options.tableTitleBottom = "Second Nine",
        options.topScorecard = scorecard.slice(0,9),
        options.bottomScorecard = scorecard.slice(9)
         
    }
    
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
                            scorecard={options.topScorecard} 
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
                                scorecard={options.bottomScorecard} 
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
            <Paper style={{margin: '5px'}}>
                {courseInfo.name}
            </Paper>

            {topCard}

            {bottomCard}   {/* set to null when playing nine holes */}
                     
        </>
 
    )

}

export default FinalScoreCard
