import React, { useEffect } from "react";
import {
  Button,
  ButtonGroup,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loadStatus } from "../../redux/features/status";
import { loadComments, removeComment } from "../../redux/features/comment";
import { loadClient } from "../../redux/features/client";
import moment from "moment";
import { useParams } from 'react-router-dom';

export function Adminka(props) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const statuses = useSelector((state) => state.statuses.items);
  const comments = useSelector((state) => state.comments.items);


  useEffect(() => {
    dispatch(loadStatus());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadComments());
  }, [dispatch]);


  useEffect(() => {
    dispatch(loadClient());
  }, [dispatch]);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    table: {
      minWidth: 500,
    },
    tableWrapper: {
      overflowX: "auto",
    },
  }));
  const handleRemoveComment = (id) => {
    dispatch(removeComment(id))
  }

  const classes = useStyles();

  return (
    <div style={{backgroundColor:'#fff'}}>
      {comments.map((item) => {
        const statusCom = statuses.find(
          (element) => element._id === item.status
        );
        return (
          <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
              <Table className={classes.table}>
                <TableBody>
                  <TableRow>
                    <TableCell align="lift">
                      {moment(item?.createdAt).format("YY.MM.DD HH:mm")}
                    </TableCell>
                    <TableCell align="left">
                      <td
                        style={{ borderRadius: 4 }}
                        bgcolor={statusCom?.color}
                      >
                        {statusCom?.status}
                      </td>
                    </TableCell>
                    <TableCell align="right">{item?.comment}</TableCell>
                    <TableCell align="right">
                      <ButtonGroup
                        variant="contained"
                        color="primary"
                        aria-label="split button"
                      >
                        <Button
                          color="secondary"
                          size="small"
                          aria-haspopup="true"
                          onClick={()=> handleRemoveComment(item?._id)}
                        >
                          Удалить
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Paper>
        );
      })}
    </div>
  );
}
