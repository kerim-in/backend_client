import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import { reducer } from './client';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({
    client: reducer,
    // status: sReducer,
  }),
  applyMiddleware(thunk, logger)
);
