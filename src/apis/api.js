import axios from "axios";

const baseURL = "http://api.airvisual.com/";
const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
