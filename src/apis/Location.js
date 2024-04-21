import API from "./api";
const API_KEY='a36a5c13-d5b4-4674-bb66-a74b2a2e48d5'

const GetCountry = `countries`;
const GetState = `states`;
// {{urlExternalAPI}}v2/states?country={{COUNTRY_NAME}}&key={{YOUR_API_KEY}}
export default {
  GetCountry(paylod) {
    return API.get(baseRoute(`${GetCountry}?key=${API_KEY}`), paylod);
  },
  GetState(paylod) {
    return API.get(baseRoute("states?country=India&key=a36a5c13-d5b4-4674-bb66-a74b2a2e48d5"), paylod);
  },
};
const baseRoute = (route) => {
  return `v2/${route}`;
};
