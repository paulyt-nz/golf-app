import React, { ReactEventHandler, useState } from 'react'
import { Paper, TextField, Grid, Card, CardContent } from '@mui/material';

interface RoundSetUpFormProps {
    // some function needed to handle the imports
    addPlayerToRound: (newPlayerName: string) => void
    players: string[]
}



function RoundSetUpForm({ addPlayerToRound, players }: RoundSetUpFormProps) {
    // this one needs to have forms to ask for all the information required
    // and to save it to the state of the parent 
    // need:
        // players
        // course
        // 9 or 18 holes
        // front or back nine
    const [playerFormContent, setPlayerFormContent] = useState("")

    const handleChange = (e : any) => {
        if (e === null){
            return null
        }
        setPlayerFormContent(e.target.value)
        
    }

    const handlePlayerFormSubmit = (e : any) => {
        e.preventDefault();
        addPlayerToRound(playerFormContent)
        e.target.value = ""
    }

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


    return(
        <>
        <Grid container style={gridStyles1}>
            <Grid item xs={11} md={8} lg={4} style={gridStyles2}>
        <Card style={cardStyles}>
            <h2>Pautahanui Golf Course</h2>
                <div style={{paddingBottom: "1rem"}}>
                    <CardContent style={{paddingTop: '0', display:'block'}}>Number of holes: 9</CardContent>
                    <CardContent style={{paddingTop: '0', display:'block'}}>Players: </CardContent>
                    <CardContent style={{paddingTop: '0', display:'block'}}>{players}</CardContent>
                    
                </div>
        </Card>

        
                <Paper style={{ margin: "1rem 0", padding: "0.1rem 1rem" }}>
                    <form
                        // onSubmit={(evt) => {
                        //     evt.preventDefault();
                        //     addTodo(value);
                        //     reset();
                        // }}
                    >
                        <TextField
                            // value={}
                            onSubmit={handlePlayerFormSubmit}
                            onChange={handleChange}
                            margin="normal"
                            label="Add New Player"
                            fullWidth
                        />
                    </form>
                </Paper> 
            </Grid>
        </Grid>
        </>
    )

}

export default RoundSetUpForm