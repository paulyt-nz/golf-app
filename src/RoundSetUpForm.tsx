import React, { useState } from 'react'
import { Paper, TextField, Grid, Card, CardContent, Button, InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { Player, NumHoles, Course, RoundType } from './commonTypes'


interface RoundSetUpFormProps {
    addPlayerToRound: (newPlayerName: Player ) => void,
    players: Player[],
    startNewRound: (numPlayers: number, numHoles: number) => void,
    generateNewScorecard: (numPlayers: number, numHoles: number) => void, 
    setRoundHoles: (roundType: string) => void,
    numHoles: NumHoles
    courseInfo: Course
    round: string
}


function RoundSetUpForm({ addPlayerToRound, players, startNewRound, generateNewScorecard, setRoundHoles, numHoles, courseInfo, round }: RoundSetUpFormProps): JSX.Element {
    
    const [playerFormContent, setPlayerFormContent] = useState("")
    const [roundContent, setRoundContent]           = useState("")

// *************************************************************************************//  

    const handlePlayerFormChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPlayerFormContent(e.target.value)
    }

    const handleHoleNumChange = (e : any ) => {
        e.persist()
        console.log(e.target.value)
        let value = e.target.value as string
        setRoundContent(value)
    }
 
    const handlePlayerFormSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        addPlayerToRound(playerFormContent)
        setPlayerFormContent("")
    }

    const handleBeginRoundSubmit = () => {
        if (playerFormContent !== ""){
            addPlayerToRound(playerFormContent)
        }
        generateNewScorecard(players.length, numHoles) // ********* will need to change this one when I add an input for number of holes
        startNewRound(players.length, numHoles)
    }

// *************************************************************************************//

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

    const cardStyles: React.CSSProperties = {
        marginBottom: '1rem', 
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "center" 
    }

// *************************************************************************************//
// conditional redering logic for the form

    let playerForm : JSX.Element
    if (players.length < 4) {
        playerForm = (
            <form onSubmit={handlePlayerFormSubmit} >
                <TextField
                    // value={}
                    value={playerFormContent}
                    onChange={handlePlayerFormChange}
                    margin="normal"
                    label="Whose playing?"
                    fullWidth
                />
            </form>
        )
    } else {
        playerForm = <h2>ENJOY YOUR ROUND</h2>
    }
 
// *************************************************************************************//
// Conditional Menu Options

let roundTypeOptions : JSX.Element

if (courseInfo.numHoles === 9) {
    roundTypeOptions = (
        <>
            <MenuItem key='9-once' value={'9-once'}>9 holes</MenuItem>
            <MenuItem key='18-twice' value={'18-twice'}>18 holes (round twice)</MenuItem>
        </>
    )
} else if (courseInfo.numHoles === 18) {
    roundTypeOptions = (
        <>
            <MenuItem key='18-fullround' value={'18-fullround'}>18 Holes</MenuItem>
            <MenuItem key='9-front' value={'9-front'}>9 Holes - Front</MenuItem>
            <MenuItem key='9-back' value={'9-back'}>9 Holes - Back</MenuItem>
        </>
    )
} else {
    roundTypeOptions = <MenuItem>SOMETHING WENT WRONG...</MenuItem>
}

// *************************************************************************************//

    return(
        <Grid container style={gridStyles1}>
            <Grid item xs={11} md={8} lg={4} style={gridStyles2}>


                <Card style={cardStyles}>
                    <h2>{courseInfo.name}</h2>
                    <div style={{paddingBottom: "1rem"}}>
                        <CardContent style={{paddingTop: '0', display:'block'}}>Number of holes:</CardContent>
                        <CardContent style={{paddingTop: '0', display:'block'}}>{round}</CardContent>
                    </div>
                </Card>

                {players.map((player, i) => 
                    <Card style={cardStyles}>
                        <CardContent style={{paddingTop: '0', display:'block'}}>Player {i+1}: {player}</CardContent>
                    </Card>
                )}

                <Paper style={{ margin: "1rem 0", padding: "1rem 1rem" }}>
                    <FormControl style={{ width: '100%'}}>
                        <InputLabel id="demo-simple-select-label">How many holes?</InputLabel>
                        <Select
                            style={{ display: 'flex', justifyContent: 'stretch'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={round}
                            label="Number of holes"
                            onChange={handleHoleNumChange}
                            onClick={() => console.log('clicked')}
                        >
                        
                            {roundTypeOptions}

                            <MenuItem key='18-fullround' value={'18-fullround'}>18 Holes</MenuItem>
                            <MenuItem key='9-front' value={'9-front'}>9 Holes - Front</MenuItem>
                            <MenuItem key='9-back' value={'9-back'}>9 Holes - Back</MenuItem>

                        </Select>
                    </FormControl>
                </Paper>


                <Paper style={{ margin: "1rem 0", padding: "0.1rem 1rem" }}>
                    {playerForm}
                </Paper>


                <Button style={{marginBottom: '1rem'}} variant="contained" onClick={handleBeginRoundSubmit}>
                    SAVE AND BEGIN ROUND
                </Button>

            </Grid>
        </Grid>
    )

}

export default RoundSetUpForm