import _ from "axios";
const baseUrl = "http://localhost:9000";

export const api = _.create({
  baseURL: baseUrl,
});
export const AuthApi = _.create({
  baseURL: baseUrl,
  headers: {
    'auth-token': `Bearer ${sessionStorage.getItem("token")}`,
  },
});
