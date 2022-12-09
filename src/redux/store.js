import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./action/auth/auth";
import filterReducer from "./action/reducer/filterReducer";
import autoRender from "./render/render";
const rooteReducer = combineReducers({
  auth: userReducer,
  filterReducer: filterReducer,
  autoRender,
});

const store = configureStore({
  reducer: rooteReducer,
  middleware: [thunk],
});

export default rooteReducer;
