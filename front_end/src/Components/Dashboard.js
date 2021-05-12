import { Button, createMuiTheme, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import hero from '../resources/hero.jpg'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FA9746',
            contrastText: 'white'
        }
    }
})

export default function Dashboard() {
    return (
        <div className="dashboard">
        <ThemeProvider theme={theme}>
        <img 
        src={hero} 
        style={{}} 
        alt="hero phone">
        </img>
        <div>
            <Typography 
            variant="h1">
            Manage your devices
            </Typography>
            <a
            href="/phone">
            <Button 
            variant="contained"
            color="primary"
            size="large">
                Continue
            </Button>
            </a> 
        </div>
        </ThemeProvider>
        </div>
    )
}