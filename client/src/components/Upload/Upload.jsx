import React, { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { nanoid } from "nanoid";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
const blobServiceClient = new BlobServiceClient(import.meta.env.VITE_SERVICE);
const containerClient = blobServiceClient.getContainerClient("pdf");
import { Avatar, Button, Divider, Input, List, Select } from "antd";
import Search from "antd/es/input/Search";
import UploadedFiles from "./UploadedFiles";
import {
  useToast,
  Button as CButton,
  Divider as CDivider,
  Text,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { Bars } from "react-loader-spinner";
import { CloudUploadOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const { colorMode } = useColorMode();
  const apiPrivateInstance = useAxiosPrivate();
  const [files, setFiles] = useState(null);
  const [fileData, setFileData] = useState([]);
  const [pdfUrls, setPdfUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [fetchedCollection, setFeatchedCollection] = useState([]);
  const [collectionName, setCollectionName] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  console.log("Recived", fileData);
  const toast = useToast({ position: "top" });

  const navigate = useNavigate();
  const getColllection = async () => {
    const res = await apiPrivateInstance.get("/note/collection");
    setFeatchedCollection([...res.data.arr]);
    console.log(fetchedCollection);
  };

  const createCollection = async () => {
    try {
      if (!collectionName) {
        setLoading(false);
        return toast({
          title: `Please fill folder name`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
      setLoading(true);
      const res = await apiPrivateInstance.post("/note/collection", {
        collectionName: collectionName,
      });

      setCollectionName("");
      setLoading(false);
      toast({
        title: `${collectionName} Folder is created`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  const [isUploadingCompleted, setIsUpoadingCompleted] = useState(false);
  const setIsUploading = (isCompleted) => {
    setIsUpoadingCompleted(isCompleted);
  };

  const uploadFiles = async () => {
    try {
      const promises = [];

      if (!selectedCollection)
        return toast({
          title: "Please select a folder to upload files",

          status: "error",
          duration: 2000,
          isClosable: true,
        });

      if (!files?.length > 0) {
        return toast({
          title: "Please select files",

          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
      setUploadLoading(true);
      for (const file of files) {
        const uniqueId = nanoid();

        const nameChanged = new File([file], `${uniqueId}${file.name}`);

        const obj = {
          collectionName,
          NoteName: file.name,
          url: `https://duweb.blob.core.windows.net/pdf/${nameChanged.name}`,
        };

        const blockBlobClient = containerClient.getBlockBlobClient(
          nameChanged.name
        );
        blockBlobClient
          .uploadBrowserData(nameChanged)
          .then((res) => {
            apiPrivateInstance
              .post("/note", {
                collectionName: selectedCollection,
                noteName: obj.NoteName,
                url: obj.url,
              })
              .then((res) => {
                console.log(res.data);
                setIsUploading(true);
                setFiles([]);
                toast({
                  title: "Files Uploaded successfuly",

                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });

                setFileData([]);
                setUploadLoading(false);
              })
              .catch((err) => {
                console.log("mongo", err);
                setUploadLoading(false);
                toast({
                  title: "Files not uploaded",

                  status: "error",
                  duration: 2000,
                  isClosable: true,
                });
              });
          })
          .catch((err) => {
            console.log("az", err);
            setUploadLoading(false);
            toast({
              title: "File not uploaded",

              status: "error",
              duration: 2000,
              isClosable: true,
            });
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    document.getElementById("selected").click();
  };

  return (
    <div className="   flex items-center h-[calc(100vh)] w-full  justify-center  ">
      <div className="  w-full lg:w-full     flex flex-col items-center justify-start h-full p-10 border-t-0  ">
        <div className="flex w-full h-full md:mb-4 flex-1 -mb-6  flex-col  md:flex-row lg:flex-row xl:flex-row  ">
          <div className="flex flex-1 mt-20 lg:mt-0 xl:mt-0 flex-col   h-full ">
            <div className="w-full flex flex-col items-center  font-sans">
              <Text fontSize={"md"}>Create a Folder to upload files.</Text>

              <div className="w-[16rem] mt-5">
                <Input
                  size="large"
                  bordered
                  value={collectionName}
                  onChange={(e) => {
                    setCollectionName(e.target.value);
                  }}
                  variant="outline"
                  placeholder="Folder name"
                />
              </div>
              <CButton
                width={"40"}
                mt={"5"}
                onClick={() => {
                  createCollection();
                }}
                loadingText="Creating.."
                isLoading={loading}
                colorScheme="blue"
              >
                Create
              </CButton>
            </div>
          </div>
          <div className="block">
            <CDivider className="bg-white" orientation="vertical" />
          </div>
          <div className="   flex flex-1 font-sans mt-20 mb-10 md:mb-0 lg:mb-0 xl:mb-0 lg:mt-0  flex-col  items-center">
            <div className="w-full flex  flex-col items-center  font-sans ">
              <Text mb={"5"}>Select a folder before uploading files</Text>

              <Select
                showSearch
               
                onFocus={() => {
                  getColllection();
                }}
                onChange={(e) => {
                  setSelectedCollection(e);
                }}
                size="large"
                style={{ width: 200 }}
                placeholder="Select folder"
                optionFilterProp="children"
                filterOption={(input, option) => {
                  return option.label.includes(input);
                }}
                options={fetchedCollection}
              />
            </div>
          </div>
        </div>
        <Divider className="bg-gray-200" />
        <div className="flex flex-1  flex-col mt-10  ">
          <CButton onClick={() => navigate("/profile")} h={"10"} mb="6">
            Profile
          </CButton>

          <Text h={"10"} textAlign="center" mb="6">
            Check your profile after uploading files
          </Text>
          <div className="flex  gap-6 lg:gap-10 items-center">
            <div className="">
              <input
                id="selected"
                accept="image/*,.pdf,.txt,.doc,.docx"
                multiple
                style={{ display: "none" }}
                onChange={(e) => {
                  // console.log(e.target.files)
                  const fil = e.target.files;
                  let filesData = [];
                  for (const file of fil) {
                    function formatBytes(bytes, decimals = 2) {
                      if (!+bytes) return "0 Bytes";

                      const k = 1024;
                      const dm = decimals < 0 ? 0 : decimals;
                      const sizes = [
                        "Bytes",
                        "KB",
                        "MB",
                        "GB",
                        "TB",
                        "PB",
                        "EB",
                        "ZB",
                        "YB",
                      ];

                      const i = Math.floor(Math.log(bytes) / Math.log(k));

                      return `${parseFloat(
                        (bytes / Math.pow(k, i)).toFixed(dm)
                      )} ${sizes[i]}`;
                    }
                    const size = formatBytes(file.size);

                    filesData.push({
                      name: file.name,
                      size,
                      key: file.lastModified,
                    });

                    setFileData(() => {
                      return [...filesData];
                    });
                  }
                  setFiles(e.target.files);
                }}
                type="file"
                name=""
              />
            </div>
            <div>
              <div
                onClick={handleClick}
                className={`h-[8rem] cursor-pointer w-[16rem] border-2 flex items-center text-center justify-center  border-dashed ${
                  colorMode === "dark" ? "border-gray-400" : "border-gray-600"
                }`}
              ><SearchOutlined />
                <Text ml={'1.5'}>Browse files</Text>
              </div>
              <Text fontSize={"x-small"} mt={"1"}>
                Only pdf, doc, docx , txt and image files are accepted
              </Text>
            </div>
            <div className="mr-4">
              <CButton
                w={"32"}
                leftIcon={<CloudUploadOutlined />}
                onClick={uploadFiles}
                loadingText="Uploading.."
                isLoading={uploadLoading}
                colorScheme="blue"
              >
                Upload
              </CButton>
            </div>
          </div>
          <div className="mt-4 w-full flex flex-col  gap-2 justify-start">
            {fileData &&
              fileData.map((item) => (
                <UploadedFiles
                  key={item.lastModified}
                  fileName={item.name}
                  fileSize={item.size}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
