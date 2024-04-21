import { combineReducers } from "redux";
import SIZE_REDUCER from "./size/size-reducer";
const rootreducer = combineReducers({
  size:SIZE_REDUCER,
});
export default rootreducer;
