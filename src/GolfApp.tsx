import React from 'react'
import { initialCourse, initialPlayers, scorecard } from './initialValues'

import { Typography, Paper, AppBar, Toolbar, Grid, ListItem, Divider, Card, CardHeader, CardContent } from '@mui/material';


function GolfApp() {
    
    return(
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa",
               
            }}
            elevation={0}
        >
            <AppBar color='secondary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>SHANKERS</Typography>
                </Toolbar>
            </AppBar>

        
            <Grid container style={{ 
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: 'flex-start',
                alignItems: "center",
            }}>
                <Grid item xs={11} md={8} lg={4} style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'flex-start',
                    alignItems: "stretch",
                    width: '500px'
                }}>

                    <Card style={{
                        marginBottom: '1rem', 
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'flex-start',
                        alignItems: "center" 
                        }}>
                        <CardHeader><h2>Hole 1</h2></CardHeader>
                        <CardContent>Stroke Index: 1</CardContent>
                        <CardContent>Par 3</CardContent>
                        <CardContent>245m</CardContent>
                    </Card>

                    {/* these need to be compponents */}
                    <Paper style={{marginBottom: '1rem'}}>
                    <ListItem style={{ height: "64px" }}>{initialPlayers[0]}</ListItem>
                    <Divider />
                    <ListItem style={{ height: "64px" }}>Shots: </ListItem>
                    </Paper>

                    <Paper>
                    <ListItem style={{ height: "64px" }}>{initialPlayers[1]}</ListItem>
                    <Divider />
                    <ListItem style={{ height: "64px" }}>Shots: </ListItem>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default GolfApp;