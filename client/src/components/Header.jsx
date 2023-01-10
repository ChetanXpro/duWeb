import { Avatar } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { user } from "../atoms/status";

const Header = () => {
  // console.log(user);
  const [userData, setUser] = useAtom(user);

  return (
    <div className="flex bg-[#05386b] text-white items-center gap-4 p-4 justify-between h-12 w-[100vw]">
      <Link to={"/"}>Home</Link>
      <Link to={"/setting"}>Setting</Link>

      <div>
        <Avatar name={`${userData?.name}`} size={"sm"} />
      </div>
    </div>
  );
};

export default Header;
