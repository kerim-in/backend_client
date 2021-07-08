import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loadClient } from "../../redux/client";
import { loadStatus } from "../../redux/status";
import { Button } from 'bootstrap';

function Adminka(props) {
  const dispatch = useDispatch();

  const client = useSelector((state) => state.client.items);
  useEffect(() => dispatch(loadClient()), [dispatch]);

  const status = useSelector((state) => state.status.items);
  useEffect(() => dispatch(loadStatus()), [dispatch]);

  const [stat, setStat] = useState("");

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    inputPost: {
      width: 800,
      height: 120,
      outline: 'none',
      border: 'solid 1 #f2f2f2',
    },
    postStyle: {

      marginTop:50,
      justifyContent: 'center',
      display: 'flex',
    },
    divBtnStat: {
      margin: 5
    }

  }));

  const classes = useStyles();

  const handleChange = (event) => {
    setStat(event.target.value);
  };

  return (
    <div className={classes.postStyle}>
      <div>
        <input className={classes.inputPost} type="text" />
      </div>

      <div className={classes.divBtnStat}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Статус</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={stat}
            onChange={handleChange}
          >
            {status.map((item) => (
              <MenuItem value={item._id}>{item.status}</MenuItem>
            ))}
          </Select>
          <button  className="btn-lg" >Добавить</button>
        </FormControl>
      </div>
    </div>
  );
}

export default Adminka;
