import Rfactory from "../../apis";

export const GetCountrys = (payload) => {
  return async (dispatch) => {
    try {
      let data = await Rfactory.Location.GetCountry(payload);
      await dispatch(GetCountry(data));
      return data
    } catch (err) {
      console.log(err);
      return err
    }
  };
};
export const setAqiData = (payload) => {
  return async (dispatch) => {
    try {
      await dispatch(Aqi_Data(payload));
      return payload
    } catch (err) {
      console.log(err);
      return err
    }
  };
};
export const userdetails = (payload) => {
  return async (dispatch) => {
    try {
      await dispatch(userdetail(payload));
      return payload
    } catch (err) {
      console.log(err);
      return err
    }
  };
};
export const GetState = (payload) => {
  return async (dispatch) => {
    try {
      console.log(payload,"payloadpayload")
      let data = await Rfactory.Location.GetState(payload);
      await dispatch(Get_State(data));
      return data
    } catch (err) {
      console.log(err);
      return err
    }
  };
};

export const userdetail = (data) => {
  return {
    type: "userd_etails",
    payload: data,
  };
};
export const GetCountry = (data) => {
  return {
    type: "Get_Country",
    payload: data,
  };
};
export const Get_State = (data) => {
  return {
    type: "GET_SATE",
    payload: data,
  };
};
export const Aqi_Data = (data) => {
  return {
    type: "GET_AQI",
    payload: data,
  };
};