import { Button, Divider, Text, Tooltip, useColorMode } from "@chakra-ui/react";
import React from "react";
import pdfImage from "../../assets/pdflogo.png";
import svgImage from "../../assets/svg.png";
import docImage from "../../assets/docs.png";

import { useNavigate } from "react-router-dom";

const Notes = ({ name, url }) => {
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
  const DOCUMENTS = [".doc","docx",".txt"];
  const PDF = [".pdf"];
  console.log(name.slice(-4).toLowerCase());
  const EXT = name.slice(-4).toLowerCase();
  return (
    <Tooltip label={name} placement="top">
      <div
        className={`m-2  flex ${
          colorMode === "dark"
            ? "hover:bg-gray-900 hover:rounded-md"
            : "hover:bg-gray-300 hover:rounded-md"
        }  md:m-4`}
      >
        <div className=" flex flex-col items-center  border rounded-md w-40">
          <div>
            {imagesType.includes(EXT) ? (
              <img src={url} alt="img" />
            ) : SVG.includes(EXT) ? (
              <img height={"86rem"} width="90rem" src={svgImage} alt="svg" />
            ) : PDF.includes(EXT) ? (
              <img height={"86rem"} width="90rem" src={pdfImage} alt="pdf" />
            ) : DOCUMENTS.includes(EXT) ? (
              <img height={"86rem"} width="90rem" src={docImage} alt="doc" />
            ):''}
          </div>
          <Divider className="mt-1 bg-slate-400 mb-0" />
          <div className="flex  mb-1 justify-between text-left w-full  h-14 pl-4  flex-col">
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
