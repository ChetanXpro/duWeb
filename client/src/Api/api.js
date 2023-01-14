import axios from "axios";

// const API_BASE_URL = "http://localhost:5000";
const API_BASE_URL = "https://duw.onrender.com";
export const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
});

export const apiPrivateInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
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
