import React from "react";
import { BlobServiceClient } from "@azure/storage-blob";

const Notes = () => {
  const blobServiceClient = new BlobServiceClient(import.meta.env.VITE_SERVICE);
  const containerClient = blobServiceClient.getContainerClient("pdf");
  const listFiles = async () => {
    try {
      let iter = containerClient.listBlobsFlat();
      let cont = [];
      let blobItem = await iter.next();
      console.log(blobItem);
      while (!blobItem.done) {
        const obj = {
          key: blobItem.value.name,
          url: `https://duweb.blob.core.windows.net/pdf/${blobItem.value.name}`,
        };
        cont.push(obj);
        console.log(cont);
        setPdfUrls(() => {
          return [...pdfUrls, ...cont];
        });
        blobItem = await iter.next();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      Notes
      {pdfUrls &&
        pdfUrls.map((obj) => (
          <img
            height={"30%"}
            width="30%"
            key={obj.key}
            src={`${obj.url}`}
            alt=""
          />
        ))}
    </div>
  );
};

export default Notes;
