import { Avatar } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { user } from "../../atoms/status";

const Header = () => {
  // console.log(user);
  const [userData, setUser] = useAtom(user);

  return (
    <div className="flex flex-row-reverse bg-blue-300  text-white items-center pr-10  p-4 justify-between h-12  w-[100vw-1rem]">
      <div className="">
        <Link to={"/"} className="text-black">
          Home
        </Link>
        <Link to={"/profile"} className="text-black ml-4">
          Profile
        </Link>
        <Link to={"/upload"} className="text-black ml-4">
          Upload
        </Link>
        <Link to={"/setting"} className="text-black  ml-4">
          Setting
        </Link>
      </div>
      <div>logo</div>

      {/* <div>
        <Avatar name={`${userData?.name}`} size={"sm"} />
      </div> */}
    </div>
  );
};

export default Header;
