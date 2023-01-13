import axios, { AxiosError } from "axios";

// import useAuth from "./useAuth";
// import useRefreshToken from "./useRefreshToken";

const API_BASE_URL = "https://duw.onrender.com";
export const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
});
const accessToken = localStorage.getItem("jwt");

export const apiPrivateInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    // Authorization: `Bearer ${accessToken}`,
    "Content-type": "application/json",
  },
  withCredentials: true,
});

export const login = async (payload) => {
  try {
    const request = await apiInstance.post("/auth", payload);
    return request?.data;
  } catch (err) {
    const error = err;
    return Promise.reject(error.response);
  }
};
export const signup = async (payload) => {
  try {
    const request = await apiInstance.post("/user", payload);

    return request?.data;
  } catch (err) {
    const error = err;
    return Promise.reject(error.response);
  }
};

export const getUser = async () => {
  try {
    const request = await apiPrivateInstance.get("/user/getUser");
    return request?.data;
  } catch (err) {
    const error = err;
    return Promise.reject(error.response);
  }
};
