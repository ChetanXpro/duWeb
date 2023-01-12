import React from "react";
import useAxiosPrivate from "./useAxiosPrivate";

const usePrivateApis = () => {
  const apiPrivateInstance = useAxiosPrivate();

  const getCollection = async () => {
    try {
      const request = await apiPrivateInstance.get("/note/collection");
      return request?.data;
    } catch (err) {
      const error = err;
      return Promise.reject(error.response);
    }
  };

  return {
    getCollection,
  };
};

export default usePrivateApis;
