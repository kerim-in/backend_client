import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadClient, remuveClients } from "../../redux/features/client";
import { Button, Table } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { loadStatus } from '../../redux/features/status';
import { useParams } from 'react-router-dom';

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

function Status(props) {
  const classes = useStyles();
  const clients = useSelector((state) => state.clients.items);
  const dispatch = useDispatch();
  const statuses = useSelector((state) => state.statuses.items);
  useEffect(() => dispatch(loadStatus()), [dispatch]);
const { id } = useParams()
  useEffect(() => {
    dispatch(loadClient());
  }, [dispatch]);

  useEffect(() => {
    dispatch(remuveClients(id));
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(remuveClients(id))
  }


  return (
    <div className={classes.headDiv}>
      <Table className="table-sm">
        <tr>
          <td> </td>
          <td>Ф.И.О</td>
          <td>Статус</td>
          <td>Удалить клиента</td>

        </tr>
        {clients.map((item) => {
          const statusClient = statuses.find(
            (element) => element._id === item.lastComments?.status
          );
          return (
            <tr>
              <td>
                <img alt="Remy Sharp" src={item.img} className={classes.large} />
              </td>
              <td>
                <td>
                  {item.lastName}  {item.firstName}
                </td>
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
              <td>
                <Button
                  variant="contained"
                  className="btn-sm"
                  onClick={()=> handleRemove(item._id)}
                >
                  Удалить
                </Button>
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  )
}

export default Status;
