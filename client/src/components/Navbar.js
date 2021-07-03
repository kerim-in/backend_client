import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';


export function Navbar() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menuBar:{
      justifyContent:'space-between',
      display:'flex',
      marginRight: 35,
    }
  }));

    const classes = useStyles();

    return (

      <Grid>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Госпиталь
            </Typography>
            <Typography variant="h6" className={classes.menuBar}>
              Главное
            </Typography>
            <Typography variant="h6" className={classes.menuBar}>
              Админка
            </Typography>
            <Typography variant="h6" className={classes.menuBar}>
              О нас
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    );
}