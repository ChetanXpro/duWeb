import React from "react";
import { BlobServiceClient } from "@azure/storage-blob";

const useAzureblob = () => {
  const blobServiceClient = new BlobServiceClient(import.meta.env.VITE_SERVICE);
  const pdfContainerClient = blobServiceClient.getContainerClient("pdf");
  const profileContainerClient =
    blobServiceClient.getContainerClient("profile");
  return {
    blobServiceClient,
    pdfContainerClient,
    profileContainerClient,
  };
};

export default useAzureblob;
