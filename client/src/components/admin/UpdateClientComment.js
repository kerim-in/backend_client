import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  createMuiTheme,
  makeStyles,
  Table,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loadStatus } from "../../redux/features/status";
import { useParams } from "react-router-dom";
import { addCommentClient, loadComments } from "../../redux/features/comment";
import { loadClient } from "../../redux/features/client";
import { green } from "@material-ui/core/colors";
import { Adminka } from "./Adminka";

function UpdateClientComment(props) {
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
      outline: "none",
      border: "solid 1 #fff",
    },
    postStyle: {
      marginTop: 50,
      justifyContent: "center",
      display: "flex",
    },
    divBtnStat: {
      margin: 5,
    },
    clientInfoBar: {
      width: 800,
      margin: "auto",
      paddingTop: 70,
      justifyContent: "space-between",
      display: "flex",
    },
    headComment:{
      position:'relative'
    }
  }));

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
    root: {
      width: 300,
    },
  });

  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();

  const statuses = useSelector((state) => state.statuses.items);
  const comments = useSelector((state) => state.comments.items);
  const clients = useSelector((state) => {
    return state.clients.items.find((item) => item._id === id);
  });

  useEffect(() => {
    dispatch(loadStatus());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadComments(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(loadClient());
  }, [dispatch]);

  const [status, setStatus] = useState("");
  const [comment, setComment] = useState("");
  const [user, setUser] = useState(id);

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const handlePost = () => {
    dispatch(addCommentClient(user, { comment, status }));
  };
  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className={classes.headComment} style={{ marginTop: 50 }}>
      <Box className="noteBox">
        <TextField
          id="outlined-basic"
          label="Введите комментарий"
          variant="outlined"
          className="noteInput"
          inputMode={"comme"}
          onChange={handleChangeComment}
        />
        <TextField
          style={{ marginLeft: 10 }}
          id="outlined-select-currency-native"
          select
          SelectProps={{
            native: true,
          }}
          helperText="Выберите"
          variant="outlined"
          className="formControl"
          onChange={handleChangeStatus}
        >
          <option disabled selected>
            Выберите статус
          </option>
          {statuses.map((item) => {
            return (
              <option key={item._id} value={item._id}>
                {item.status}
              </option>
            );
          })}
        </TextField>
        <Button
          style={{ marginLeft: 10 }}
          onClick={handlePost}
          variant="contained"
          color="primary"
          className="noteButton"
        >
          Добавить
        </Button>
      </Box>

        <Table size="small" aria-label="a dense table">
          <Adminka />
        </Table>
    </div>
  );
}

export default UpdateClientComment;
