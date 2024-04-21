import { combineReducers } from "redux";
import LocationReducer from "./Location/Location-Reducer";
const rootreducer = combineReducers({
  location:LocationReducer,
});
export default rootreducer;
