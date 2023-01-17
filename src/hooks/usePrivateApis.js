import React, { useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import useAzureblob from "./useAzureblob";

const usePrivateApis = () => {
  const apiPrivateInstance = useAxiosPrivate();
  const { pdfContainerClient } = useAzureblob();

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

      const request = await apiPrivateInstance.get(
        `/note?collectionID=${collectionID}`
      );

      return request?.data;
    } catch (err) {
      const error = err;
      return Promise.reject(error.response);
    }
  };

  const deleteCollection = async (id, re) => {
    try {
      const collectionID = id;

      const request = await apiPrivateInstance.delete(
        `/note/collection?collectionID=${collectionID}`
      );
      re();
      return request?.data;
    } catch (err) {
      const error = err;
      return Promise.reject(error.response);
    }
  };
  const deleteNote = async (id, re) => {
    try {
      const request = await apiPrivateInstance.delete(`/note/?noteID=${id}`);
      re();
// pdfContainerClient.deleteBlob()
      return request?.data;
    } catch (err) {
      const error = err;
      return Promise.reject(error.response);
    }
  };

  return {
    getCollection,
    deleteNote,
    getNotes,
    deleteCollection,
  };
};

export default usePrivateApis;
