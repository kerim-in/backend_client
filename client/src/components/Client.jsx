import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadClient } from "../redux/features/client";
import { Table } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { loadStatus } from "../redux/features/status";

function Client({client}) {
  const dispatch = useDispatch();
  const clients = useSelector((state) => {
    return state.clients.items.filter(
      (item) => item.lastName.toLowerCase().indexOf(client.toLowerCase()) !== -1
    );
  })
  useEffect(() => dispatch(loadClient()), [dispatch]);

  const statuses = useSelector((state) => state.statuses.items);
  useEffect(() => dispatch(loadStatus()), [dispatch]);

  const useStyles = makeStyles((theme) => ({
    headDiv: {
      marginTop: 30,
      justifyContent: "center",
    },
    imgClient: {
      width: 100,
      borderRadius: '50%',
    },
    titleBar: {
      justifyContent: "center",
      display: "flex",
      marginLeft: "auto",
    },
    statusColor: {
      borderRadius: 4,
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      borderRadius: '50%',
    },
  }));
  const classes = useStyles();

  const handleUser = (id) => {};

  return (
    <div className={classes.headDiv}>
      <Table className="table-sm">
        <tr>
          <td> </td>
          <td>Ф.И.О</td>
          <td> </td>
          <td>Последнее обнов..</td>
          <td>Статус</td>
          <td>Записей</td>
        </tr>
        {clients.map((item) => {
          const statusClient = statuses.find(
            (element) => element._id === item.lastComments?.status
          );

          return (
            <tr>
              <td>
                <img src={item.img} className={classes.large} />
              </td>
              <td>
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/clients/${item._id}/comments`}
                >
                  <td
                    onClick={() => handleUser(item._id)}
                    style={{ textAlign: "match-parent" }}
                  >
                    {item.lastName} {item.firstName} {item.patronymic}
                  </td>
                </NavLink>
              </td>
              <td> </td>
              <td>
                {moment(item.lastComments?.createdAt).format("YY.MM.DD HH:mm")}
              </td>
              <td>
                <div>
                  <td
                    className={classes?.statusColor}
                    bgcolor={statusClient?.color}
                  >
                    {statusClient?.status}
                  </td>
                </div>
              </td>
              <td>{item.comments.length}</td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
}

export default Client;
