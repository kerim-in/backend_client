import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  createMuiTheme,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { loadStatus } from "../../redux/features/status";
import { useParams } from "react-router-dom";
import { addCommentClient, loadComments } from "../../redux/features/comment";
import { loadClient } from "../../redux/features/client";
import { green } from "@material-ui/core/colors";
import moment from "moment";

function Adminka(props) {
  const useStyles = makeStyles((theme) => ({

  }))

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

  return (
    <div>
          {comments.map((item) => {
            const statusCom = statuses.find(
              (element) => element._id === item.status
            );
            return (
              <table>
                <tr style={{justifyContent: 'space-between', display:'flex'}}>
                  <td xs={4}>
                    {moment(item.createdAt).format("YY.MM.DD HH:mm")}
                  </td>

                  <td>
                    <td
                      xs={4}
                      style={{ borderRadius: 4 }}
                      bgcolor={statusCom?.color}
                    >
                      {statusCom?.status}
                    </td>
                  </td>

                  <td xs={4}>
                    <ButtonGroup
                      variant="contained"
                      color="primary"
                      aria-label="split button"
                    >
                      <Button color="secondary" size="small" aria-haspopup="true">
                        Удалить
                      </Button>
                      <Button color="primary" size="small" aria-haspopup="true">
                        Изменить
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td xs={4} align="right" style={{ textAlign: "center" }}>
                    {item.comment}
                  </td>
                </tr>
              </table>
            );
          })}
    </div>
  )

export default Adminka;
