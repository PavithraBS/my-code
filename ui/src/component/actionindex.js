import axios from "axios";
import * as constant from './constant';




export const client = axios.create({
  baseURL: constant.BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
})

/*send token to backend for authentication */
client.interceptors.request.use((request) => {
  request.headers['x-auth-token']=localStorage.getItem("token");
return request;
});

