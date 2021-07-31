import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import { clientsReducer } from "./features/client";
import { statusesReducer } from "./features/status";
import { addCommentClient, commentsReducer } from "./features/comment";
import { addClients } from "./features/addClient";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({
    clients: clientsReducer,
    statuses: statusesReducer,
    comments: commentsReducer,
    commentPost: addCommentClient,
    addClients: addClients,
  }),
  applyMiddleware(thunk, logger)
);
