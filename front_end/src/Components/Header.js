import React from 'react';
import Appbar from '@material-ui/core/AppBar'
import { Button, Toolbar, Typography } from '@material-ui/core';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      appbar: {
        alignItems: 'center',
      },
      button: {
        flexGrow: 1
      }
})

export default function Header() {
    const classes = useStyles();

    return (
        <div className="header">
        <div>
            <Appbar 
            color="transparent"
            position="static"
           >
            <Toolbar className={classes.root}>
                
                <a href="/">
                <SmartphoneIcon
                fontSize="large" />
                </a>
                <a
                href="/add">
                <Button
                variant="contained"
                color="secondary">
                Add
                </Button>
                </a>
                </Toolbar>
            </Appbar>
        </div>
        </div>
    )
}