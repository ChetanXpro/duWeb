import {
  Button,
  Divider,
  Text,
  useToast,
  Tooltip,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import pdfImage from "../../assets/pdflogo.png";
import svgImage from "../../assets/svg.png";
import docImage from "../../assets/docs.png";
import { Popconfirm } from "antd";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import usePrivateApis from "../../hooks/usePrivateApis";
const Notes = ({ name, url, re, id }) => {
  const { deleteNote } = usePrivateApis();

  const toast = useToast({ position: "top" });
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const imagesType = [
    ".png",
    ".jpeg",
    ".jpg",
    "jpeg",
    ".jpe",
    ".jif",
    "jfif",
    ".jfi",

    ".gif",
    "webp",
    "tiff",
    ".tif",
  ];
  const SVG = [".svg"];
  const DOCUMENTS = [".doc", "docx", ".txt"];
  const PDF = [".pdf"];

  const EXT = name.slice(-4).toLowerCase();
  return (
    <Tooltip label={name} placement="top">
      <div
        className={`m-2 relative  flex ${
          colorMode === "dark"
            ? "hover:bg-gray-900 hover:rounded-md"
            : "hover:bg-gray-300 hover:rounded-md"
        }  md:m-4`}
      >
        <div className=" flex flex-col items-center  border rounded-md w-40">
          <div
            onClick={(e) => e.stopPropagation()}
            className="  absolute right-0 top-0  "
          >
            <Popconfirm
              placement="bottom"
              color={"blue"}
              title="You cannot recover after deleting"
              description={`Are you sure to delete ${name}  `}
              onConfirm={() => {
                deleteNote(id, re);
                queryClient.invalidateQueries("note");

                toast({
                  title: `${name} Deleted`,
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
              }}
              // onCancel={cancel}
              okText="Delete"
              cancelText="Cancel"
            >
              <a href="#">
                <IconButton
                  size={"sm"}
                  colorScheme={"red"}
                  icon={<DeleteIcon className="" />}
                />
              </a>
            </Popconfirm>
          </div>
          <div className="h-[6rem] flex justify-center bg-orange-800 object-cover w-20">
            {imagesType.includes(EXT) ? (
              <img height={"100%"} width="100%" src={url} alt="img" />
            ) : SVG.includes(EXT) ? (
              <img src={svgImage} alt="svg" />
            ) : PDF.includes(EXT) ? (
              <img height={"100%"} width="100%" src={pdfImage} alt="pdf" />
            ) : DOCUMENTS.includes(EXT) ? (
              <img src={docImage} alt="doc" />
            ) : (
              ""
            )}
          </div>
          <Divider className="mt-1 bg-slate-400 mb-0" />
          <div className="flex z-10   mb-1 justify-between text-left w-full  h-14 pl-4  flex-col">
            <div className="text-sm capitalize font-sans text-left ">
              <Text>
                {name?.length > 12 ? `${name?.slice(0, 12)}...` : name}
              </Text>
            </div>
            <div className="text-xs w-full  font-sans">
              <a href={url}>
                <Button size={"xs"}>Download</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default Notes;
