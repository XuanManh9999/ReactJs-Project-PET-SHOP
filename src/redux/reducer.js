import { combineReducers } from "redux";
import LocalStorageReducer from "./SliceReducer/localstorage";

const RootReducer = combineReducers({
  LocalStorageReducer: LocalStorageReducer,
});

export default RootReducer;
