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
  const getNotes = async ({ queryKey }) => {
    try {
      const [key, id] = queryKey;
      const collectionID = id;

      const request = await apiPrivateInstance.get(`/note?collectionID=${collectionID}`);
      console.log(request.data);
      return request?.data;
    } catch (err) {
      const error = err;
      return Promise.reject(error.response);
    }
  };

  return {
    getCollection,
    getNotes,
  };
};

export default usePrivateApis;
