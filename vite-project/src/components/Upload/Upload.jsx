import React, { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { nanoid } from "nanoid";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
const blobServiceClient = new BlobServiceClient(import.meta.env.VITE_SERVICE);
const containerClient = blobServiceClient.getContainerClient("pdf");
const Upload = () => {
  const apiPrivateInstance = useAxiosPrivate();
  const [files, setFiles] = useState(null);
  const [pdfUrls, setPdfUrls] = useState([]);
  const [collectionName, setCollectionName] = useState("history");
  console.log(nanoid());

  const uploadFiles = async () => {
    try {
      const promises = [];
      const uploadedPdfsData = [];

      for (const file of files) {
        const uniqueId = nanoid();
        // console.log(file);
        const nameChanged = new File([file], `${uniqueId}${file.name}`);

        const obj = {
          collectionName,
          NoteName: file.name,
          url: `https://duweb.blob.core.windows.net/pdf/${nameChanged.name}`,
        };
        uploadedPdfsData.push(obj);

        const blockBlobClient = containerClient.getBlockBlobClient(
          nameChanged.name
        );
        blockBlobClient
          .uploadBrowserData(nameChanged)
          .then((res) => {
            apiPrivateInstance
              .post("/note", {
                collectionName,
                noteName: obj.NoteName,
                url: obj.url,
              })
              .then((res) => console.log(res.data));
          })
          .catch((err) => {
            //All errror handling here
          });
      }

      console.log(uploadedPdfsData);

      // await Promise.allSettled(promises);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <input
          multiple
          // onChange={handleImageFile}
          onChange={(e) => {
            setFiles(e.target.files);
            // setFile([...getImageFile, e.target.files[0]])
          }}
          type="file"
          name=""
          id=""
        />
        <button onClick={uploadFiles}>Upload</button>
      </div>
    </div>
  );
};

export default Upload;
