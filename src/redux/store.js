import { createStore } from "redux";
import LocalStorageReducer from "./reducer.js";

export const store = createStore(LocalStorageReducer);
