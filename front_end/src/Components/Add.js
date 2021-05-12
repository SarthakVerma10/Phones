import React from 'react';
import { Button, Container, FormControl, makeStyles, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#884a4a',
        color: 'white'
    }
})

export default function Phone() {
    const classes = useStyles()

    function submit() {
        const device = {
            name: document.getElementById("name").value,
            year_bought: document.getElementById("year_bought").value,
            year_sold: document.getElementById("year_sold").value,
            img: document.getElementById("img").value,
            os: document.getElementById("os").value,
        }

        console.log('device: ', device);

        const url = '/api/create'

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(device)
        }).then(response => response.json())
          .then(result => console.log('result', result))
    }
    return (
        <div>
            <Container 
            className="add-container" 
            maxWidth="md">
                <Typography 
                variant="h4">
                Add Device
                </Typography>
                <FormControl 
                fullWidth={true}
                margin="dense"
                className="form">
                    <TextField
                    label="Model Name"
                    id="name" />
                    <TextField 
                    id="year_bought"
                    label="Year Bought" />
                    <TextField 
                    id="year_sold"
                    label="Year Sold" />
                    <TextField 
                    id="img"
                    label="Image Url" />
                    <TextField 
                    id="os"
                    label="OS" />
                    <Button 
                    variant="contained" 
                    className={classes.root}
                    onClick={submit}>
                        Submit
                    </Button>
                </FormControl>
            </Container>
        </div>
    )
}