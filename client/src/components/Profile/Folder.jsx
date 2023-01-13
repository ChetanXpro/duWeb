import { DeleteOutlined } from "@ant-design/icons";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Highlight,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Popconfirm } from "antd";

import React from "react";
import { useNavigate } from "react-router-dom";
import folder from "../../../public/folder.ico";

const Folder = ({ name = "history", totalitemsInside = 0, id, onOpen }) => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });
  return (
    <div
      className={`m-2 relative p-2  cursor-pointer ${
        colorMode === "dark"
          ? "hover:bg-gray-900 hover:rounded-md"
          : "hover:bg-gray-300 hover:rounded-md"
      }  md:m-4`}
      onClick={() => {
        navigate(`/profile/${id}`);
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="  absolute right-0 top-0  "
      >
        <Popconfirm
          color={"blue"}
          title="All files inside this folder will deleted"
          description={`Are you sure to delete ${name} Folder `}
          onConfirm={confirm}
          // onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">
            <DeleteIcon className="" />
          </a>
        </Popconfirm>
      </div>

      <div className=" flex flex-col items-center  border rounded-md w-40">
        <div>
          <img height={"100rem"} width="120rem" src={folder} alt="" />
        </div>
        <Divider className="mt-1 bg-slate-400 mb-0" />
        <div className="flex  mb-1 justify-between text-left w-full  h-12 pl-4  flex-col">
          <div className="text-lg capitalize font-sans text-left ">
            <Text>{name?.length > 12 ? `${name?.slice(0, 12)}...` : name}</Text>
          </div>
          <div className="text-xs font-sans">
            <Text>
              {`${
                totalitemsInside > 0
                  ? `${totalitemsInside} files`
                  : "Folder is empty"
              } `}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
