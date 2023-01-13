
import { Close } from "@material-ui/icons";



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

const MenuItems = ({ showMenu, active }) => {
 
  const { colorMode, toggleColorMode } = useColorMode();
  const [userData, setUser] = useAtom(user);
  const navigate = useNavigate();
  return (
    <ul
      className={
        active
          ? "flex-col flex z-50 items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <Close onClick={showMenu}  />
      <Link to={"/"} className="">
        <Text>Home</Text>
      </Link>

      <Link to={"/profile"} >
        <Text>Profile</Text>
      </Link>

      <Link to={"/upload"} >
        <Text>Upload</Text>
      </Link>
      <div className="flex gap-1 items-center">
            <div className="cursor-pointer md:ml-10 sm:ml-6 ml-4">
              <a target={"_blank"} href="https://discord.gg/kDJQqxqv">
                {colorMode === "light" ? (
                  <img
                    src={Discord}
                    height="40rem"
                    width={"40rem"}
                    alt="discord"
                  />
                ) : (
                  <img
                    src={WhiteDiscord}
                    height="40rem"
                    width={"40rem"}
                    alt="discord"
                  />
                )}
              </a>
            </div>
            <IconButton
              onClick={toggleColorMode}
              // colorScheme='blue'
              ml={4}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />

            <div className="ml-4 mr-2">
              <Avatar name={`${userData?.name}`} size={"sm"} />
            </div>
          </div>
    </ul>
  );
};

export default MenuItems;
