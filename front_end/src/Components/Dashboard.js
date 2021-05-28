import { Button, createMuiTheme, ThemeProvider, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import hero from '../resources/hero.jpg';
import { PhoneContext, PhoneDispatchContext } from '../index'
import { Redirect } from 'react-router';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FA9746',
            contrastText: 'white'
        }
    }
})

export default function Dashboard() {
    const [redirect, setRedirect] = useState(false)

    const phone = useContext(PhoneContext)
    const setPhoneDetails = useContext(PhoneDispatchContext)

    const addContext = () => {
        fetch('http://localhost:3001/api/all')
          .then(res => res.json())
          .then(rel => {
              setPhoneDetails(rel)
              setRedirect(true)
            })
          console.log('phone: ', phone);
    }
    
    return (
        <div className="dashboard">
        <ThemeProvider theme={theme}>
        <img 
        src={hero} 
        alt="hero phone"
        className="dashboard-img">
        </img>
        <div>
            <Typography 
            variant="h1">
            Manage your devices
            </Typography>
            <a
            href="#">
            <Button 
            variant="contained"
            color="primary"
            size="large"
            onClick={addContext}>
                Continue
            </Button>
            </a> 
        </div>
        </ThemeProvider>

        {redirect ? <Redirect to="/phone" /> : ''}

        </div>
    )
}