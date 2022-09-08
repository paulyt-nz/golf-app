import React from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid, ListItem, Divider, Card, CardHeader, CardContent } from '@mui/material';

function HoleInfoCard(props: any) {
            return (
                    <Card style={{
                        marginBottom: '1rem', 
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'flex-start',
                        alignItems: "center" 
                        }}>
                        <h2>{props.name}</h2>
                        
                        <CardContent style={{paddingTop: '0'}}>Par {props.par}</CardContent>
                        <CardContent style={{paddingTop: '0'}}>{props.tee}m</CardContent>
                        <CardContent style={{paddingTop: '0'}}>SI: {props.strokeIndex}</CardContent>
                    </Card>
            )

}

export default HoleInfoCard