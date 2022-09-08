import React from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid, ListItem, Divider, Card, CardHeader, CardContent } from '@mui/material';

function PlayerCard(props: any) {

    return(
        <Paper style={{marginBottom: '1rem'}}>
            <ListItem style={{ height: "64px" }}>{props.player}</ListItem>
                <Divider />
            <ListItem style={{ height: "64px" }}>Shots: </ListItem>
        </Paper>
    )

}

export default PlayerCard