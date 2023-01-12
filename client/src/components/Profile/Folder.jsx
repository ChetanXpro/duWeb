import { Divider, Text, useColorMode } from "@chakra-ui/react";

import React from "react";
import folder from "../../../public/folder.ico";

const Folder = ({ name = "history", totalitemsInside = 0 }) => {
  const { colorMode } = useColorMode();
  return (
    <div
      className={`m-2 cursor-pointer ${
        colorMode === "dark"
          ? "hover:bg-gray-900 hover:rounded-md"
          : "hover:bg-gray-300 hover:rounded-md"
      }  md:m-4`}
    >
      <div className=" flex flex-col items-center  border rounded-md w-40">
        <div>
          <img height={"100rem"} width="120rem" src={folder} alt="" />
        </div>
        <Divider className="mt-1 bg-slate-400 mb-0" />
        <div className="flex  mb-1 justify-between text-left w-full  h-12 pl-4  flex-col">
          <p className="text-lg font-sans text-left ">
            <Text>{name?.length > 12 ? `${name?.slice(0, 12)}...` : name}</Text>
          </p>
          <p className="text-xs font-sans">
            <Text>
              {`${
                totalitemsInside > 0
                  ? `${totalitemsInside} files`
                  : "Folder is empty"
              } `}
            </Text>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Folder;
