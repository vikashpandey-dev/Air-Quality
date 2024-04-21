import { combineReducers } from "redux";
import LocationReducer from "./size/Location-Reducer";
const rootreducer = combineReducers({
  location:LocationReducer,
});
export default rootreducer;
