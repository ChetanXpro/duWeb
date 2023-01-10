// import { axiosPrivate } from "../api/axios";

import { useEffect } from "react";

import { apiPrivateInstance } from "../Api/api";

const useAxiosPrivate = () => {

  useEffect(() => {
    const accessToken = localStorage.getItem("jwt");
    const requestIntercept = apiPrivateInstance.interceptors.request.use(
      (config) => {
       
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      apiPrivateInstance.interceptors.request.eject(requestIntercept);
     
    };
  }, []);

  return apiPrivateInstance;
};

export default useAxiosPrivate;