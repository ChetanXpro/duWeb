import { Avatar, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { Image, Avatar as Avatarr } from "antd";
import { useAtom } from "jotai";

import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { user } from "../../atoms/status";
import Discord from "../../assets/discord.png";
import WhiteDiscord from "../../assets/whitedis.png";
import logo from "../../assets/nobg.png";
import { Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AntDesignOutlined } from "@ant-design/icons";

const Header = () => {
  const [userData, setUser] = useAtom(user);
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      className={`flex ${
        colorMode === "dark" ? "bg-gray-900" : "bg-gray-200"
      }   font-mono lg:text-xl  relative   items-center   p-4 justify-between h-16  w-[100vw-1rem]`}
    >
      <div
        className="cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
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
          <div className="cursor-pointer md:ml-10 sm:ml-6 ml-4">
            {colorMode === "light" ? (
              <img src={Discord} height="40rem" width={"40rem"} alt="discord" />
            ) : (
              <img
                src={WhiteDiscord}
                height="40rem"
                width={"40rem"}
                alt="discord"
              />
            )}
              </div>
            <IconButton
              onClick={toggleColorMode}
              ml={4}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
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
