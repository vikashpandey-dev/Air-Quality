import { createStore } from 'redux';
const initialState = {
  state: [],
  country: [],
  AqiData: [], // Initial state for AQI data
  userdetails:{}
};

const LOCATION_REDUCER = (state = initialState, action) => {
  console.log(action,"ASDasdsads")
  switch (action.type) {
    case "userd_etails":
      return {
        ...state,
        userdetails: action.payload // Store AQI data object in AqiData state property
      };
    case "GET_AQI":
      return {
        ...state,
        AqiData: action.payload // Store AQI data object in AqiData state property
      };
    case "Get_Country":
      return {
        ...state,
        country: action.payload.data.data
      };

    case "GET_STATE":
      return {
        ...state,
        state: action.payload.data.data
      };
    default:
      return state;
  }
  
};
const savedState = JSON.parse(localStorage.getItem("reduxState"));
const store = savedState
  ? createStore(
      LOCATION_REDUCER,
      savedState
    )
  : createStore(LOCATION_REDUCER);

// Subscribe to store changes and save state to browser storage
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
export default LOCATION_REDUCER;
