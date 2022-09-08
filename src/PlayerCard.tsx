import React from 'react'
import { Typography, Paper, ListItem, Divider, Button, IconButton } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function PlayerCard(props: any) {

    return(
        <Paper style={{marginBottom: '1rem'}}>
            <ListItem style={{ height: "64px" }}>{props.player}</ListItem>
            {/* want it to say Front 9: 50 +10 - Back 9 (3) */}
                <Divider />
            <ListItem style={{ 
                height: "64px",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-evenly"
                }}> 
                {/* change the button variant to "contained" when it is selected */}
                {/* <Button variant="outlined">1</Button>
                <Button variant="outlined">2</Button> */}
                {/* these need to show up when you hit the arrows */}
                {/* <IconButton variant="outlined">
                            <KeyboardArrowLeftIcon />
                </IconButton>                 cant get these ones working for some reason*/}
                <Button variant="contained">3</Button>
                <Button variant="contained">4</Button>
                <Button variant="contained">5</Button>
                <Button variant="contained">6</Button>
                <Button variant="contained">7</Button>
                <Button variant="contained">8</Button>
                
                {/* Need to make these extra ones show up when needed */}
                {/* <Button variant="outlined">9</Button>
                <Button variant="outlined">10</Button> */}
            </ListItem>
            {/* this one needs to have buttons for all the shots  */}
        </Paper>
    )

}

export default PlayerCard