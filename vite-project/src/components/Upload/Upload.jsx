import React, { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { nanoid } from "nanoid";

const Upload = () => {
  const [files, setFiles] = useState(null);
  const [pdfUrls, setPdfUrls] = useState([]);
  console.log(nanoid());

  const blobServiceClient = new BlobServiceClient(
    "https://duweb.blob.core.windows.net/?sv=2021-06-08&ss=b&srt=sco&sp=rwdlaciytfx&se=2023-01-11T00:38:59Z&st=2023-01-10T16:38:59Z&spr=https,http&sig=YYOoOyFgdei7OYgiaR%2FMDVmHFd1Z0rQtSeqN5L251Uo%3D"
  );
  const containerClient = blobServiceClient.getContainerClient("pdf");
  const [getImageFile, setImageFile] = useState([]);

  const handleImageFile = (e) => {
    setImageFile([...getImageFile, e.target.files]);
  };

  const uploadFiles = async () => {
    try {
      const promises = [];
      const uploadedPdfsData = []

      for (const file of files) {
        const uniqueId = nanoid();
        const nameChanged = new File([file], `${uniqueId}.jpeg`);
        const obj = {
          pdf
        }
        console.log(nameChanged);
        const blockBlobClient = containerClient.getBlockBlobClient(nameChanged.name);
        promises.push(blockBlobClient.uploadBrowserData(nameChanged));
      }

      await Promise.all(promises)
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
