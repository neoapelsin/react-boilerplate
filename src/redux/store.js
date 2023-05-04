import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducers";

const initialState = {};
const reducers = combineReducers({
  mainState: Reducer,
});
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);
export default store;


// https://dev.to/bangash1996/introduction-react-redux-using-hooks-useselector-usedispatch-26ch