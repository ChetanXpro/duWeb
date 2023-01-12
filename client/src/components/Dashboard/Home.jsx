import { Spinner, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
// import { getUser } from "../Api/api";
import img from "../../../public/med.png";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="flex flex-col items-center gap-3 ">
      <h2>Login successfuly </h2>
      <button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "'Light'"}
      </button>
      <img src={img} height="40%" width={"40%"} alt="" />
    </div>
  );
};

export default Home;
