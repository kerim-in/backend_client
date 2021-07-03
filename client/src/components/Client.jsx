import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadClient } from "../redux/client";
import { Table } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Client() {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.client.items);
  useEffect(() => dispatch(loadClient()), [dispatch]);

  const useStyles = makeStyles((theme) => ({
    headDiv: {
      marginTop: 30,
      justifyContent: "center",
      display: "flex",
    },
    imgClient: {
      width: 70,
      borderRadius: 40,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.headDiv}>
      <div className="">

      </div>
      {client.map((item) => {
        return (
          <div>

            <div className="container">
              <img className={classes.imgClient} src={item.img} />
            </div>
            <div className="container">
              <>{item.lastName} </>
              <>{item.firstName} </>
              <>{item.patronymic}</>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Client;
