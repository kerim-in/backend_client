import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
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
    menuBar: {
      justifyContent: "space-between",
      display: "flex",
      marginRight: 35,
      textDecoration: "none",
      color: "white",
    },
  }));

  const classes = useStyles();

  return (
    <Grid>
      <AppBar position="static">
        <Toolbar>
          <NavLink
            style={{
              justifyContent: "space-between",
              display: "flex",
              marginRight: 35,
              textDecoration: "none",
              color: "white",
            }}
            to="/"
            variant="h6"
            className={classes.title}
          >
            Центер вакцинации
          </NavLink>
          <NavLink to="/line" variant="h6" className={classes.menuBar}>
            Поиск
          </NavLink>
          <NavLink to="/" variant="h6" className={classes.menuBar}>
            Главное
          </NavLink>
          <NavLink to="/adminka" variant="h6" className={classes.menuBar}>
            Админка
          </NavLink>
          <NavLink to="/status" variant="h6" className={classes.menuBar}>
            Статус
          </NavLink>
          <NavLink to="info" className={classes.menuBar} variant="h6">
            О нас
          </NavLink>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
