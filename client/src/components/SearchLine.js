import { InputBase, makeStyles, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/core/Icon';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "70%",
    height: "auto",
    marginTop: 50,
    marginLeft: "15%",
    marginRight: "15%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 1,
  },
}));

function SearchLine({setClient}) {
  const classes = useStyles();


  const handleChangeInput = (e) => {
    setClient(e.target.value);
  };

  const clients = useSelector((state) => {
    return state.clients.items.filter(
      (el) => el.lastName.toLowerCase() !== -1
    );
  });

    return (
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="поиск клиента"
            inputProps={{ "aria-label": "search client" }}
            onChange={handleChangeInput}
          />
          <IconButton>
              <SearchIcon style={{color: 'white'}}/>
          </IconButton>

        </Paper>
    );
}
export default SearchLine;
