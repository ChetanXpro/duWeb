import { Avatar, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { Image } from "antd";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { user } from "../../atoms/status";
import styes from "./header.module.css";
import logo from "../../../public/nobg.png";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  // console.log(user);
  const [userData, setUser] = useAtom(user);
  // const { colorMode } = useColorMode();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      className={`flex ${
        colorMode === "dark" ? "bg-gray-900" : ""
      }   font-mono lg:text-xl  relative   items-center   p-4 justify-between h-16  w-[100vw-1rem]`}
    >
      <div>
        <img height={"60rem"} width="60rem" src={logo} />
      </div>
      <div className=" items-center flex lg:gap-12 ">
        <Link to={"/"} className="">
          <Text>Home</Text>
        </Link>
        <Link to={"/profile"} className=" ml-4">
          <Text>Profile</Text>
        </Link>
        <Link to={"/upload"} className="ml-4">
          <Text>Upload</Text>
        </Link>
        <div className="flex gap-1 items-center">
          <IconButton
            onClick={toggleColorMode}
            ml={4}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
          <IconButton
           
            ml={4}
            icon={<Disco />}
          />
          <div className="ml-4 mr-2">
            <Avatar name={`${userData?.name}`} size={"sm"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
