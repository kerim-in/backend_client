import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addClient,
  getFirstName,
  getImg,
  getLastName,
  getPatronymic,
} from "../../redux/features/addClient";
import SaveIcon from '@material-ui/icons/Save';
import { Button, Grid, makeStyles, Table, TextField } from '@material-ui/core';
import Client from '../Client';

function AddClient() {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',

    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.addClients.firstName);
  const lastName = useSelector((state) => state.addClients.lastName);
  const patronymic = useSelector((state) => state.addClients.patronymic);
  const clients = useSelector((state) => state.clients.items);

  const img = useSelector((state) => state.addClients.img);
  const handleChangeLastName = (e) => {
    dispatch(getLastName(e.target.value));
  };
  const handleChangeFirstName = (e) => {
    dispatch(getFirstName(e.target.value));
  };
  const handleChangePatronymic = (e) => {
    dispatch(getPatronymic(e.target.value));
  };
  const handleChangeImg = (e) => {
    dispatch(getImg(e.target.value));
  };

  useEffect(() => {
    dispatch(addClient());
  }, [dispatch]);


  const handleAddClient = () => {
    dispatch(
      addClient({
        firstName,
        lastName,
        patronymic,
        img,
      })
    );
  };


  return (
    <Grid>
      Добавление нового клиента
      <Grid>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="filled-name"
            label="Имя"
            className={classes.textField}
            margin="normal"
            variant="filled"
            type="text"
            value={lastName}
            onChange={handleChangeLastName}
          />
          <TextField
            id="filled-name"
            label="Фамилия"
            className={classes.textField}
            margin="normal"
            variant="filled"
            type="text"
            value={firstName}
            onChange={handleChangeFirstName}
          />

          <TextField
            id="filled-name"
            label="Отчество"
            className={classes.textField}
            margin="normal"
            variant="filled"
            type="text"
            value={patronymic}
            onChange={handleChangePatronymic}
          />

          <TextField
            id="filled-name"
            label="Поле сылки на картинку"
            className={classes.textField}
            margin="normal"
            variant="filled"
            type="text"
            value={img}
            onChange={handleChangeImg}
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={handleAddClient}
          >
            Save
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default AddClient;
