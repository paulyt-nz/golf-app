import React from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid, ListItem, Divider, Card, CardHeader, CardContent } from '@mui/material';

interface HoleInfoCard {
    name: string;
    par: number;
    tee: number;
    strokeIndex: number
}

function HoleInfoCard({ name, par, tee, strokeIndex}: HoleInfoCard) {
            return (
                    <Card style={{
                        marginBottom: '1rem', 
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'flex-start',
                        alignItems: "center" 
                        }}>
                        <h2>{name}</h2>
                        <div style={{paddingBottom: "1rem"}}>
                            <CardContent style={{paddingTop: '0', display:'inline'}}>Par {par}</CardContent>
                            <CardContent style={{paddingTop: '0', display:'inline'}}>{tee}m</CardContent>
                            <CardContent style={{paddingTop: '0', display:'inline'}}>SI: {strokeIndex}</CardContent>
                        </div>
                    </Card>
            )

}

export default HoleInfoCard