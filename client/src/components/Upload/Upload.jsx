import React, { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { nanoid } from "nanoid";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
const blobServiceClient = new BlobServiceClient(import.meta.env.VITE_SERVICE);
const containerClient = blobServiceClient.getContainerClient("pdf");
import { Button, Input, Select } from "antd";
import Search from "antd/es/input/Search";

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

  // <input
  //         accept="image/*,.pdf,.txt,.doc,.docx"
  //         multiple
  //         onChange={(e) => {
  //           setFiles(e.target.files);
  //         }}
  //         type="file"
  //         name=""
  //         id=""
  //       />
  //       <button onClick={uploadFiles}>Upload</button>

  return (
    <div className="h-full bg-red-400 flex items-center justify-center  ">
      <div className=" xl:bg-white w-full lg:w-[80%]       flex flex-col items-center justify-center h-full p-10 lg:h-[90%] border border-gray-700  ">
        <div className="flex gap-20 flex-1 flex-col md:flex-row lg:flex-row xl:flex-row items-center ">
          <div className="flex flex-col items-center justify-center">
          <span>Create a folder </span>
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="medium"
              loading={false}
            />
          </div>
          <div className="flex flex-col items-center">
            <span>Select a folder </span>
            <Select
              showSearch
              size="medium"
              style={{ width: 200 }}
              placeholder="Select folder"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[]}
            />
          </div>
        </div>
        <div className="flex flex-1">Upoad file</div>
      </div>
    </div>
  );
};

export default Upload;
