import { Button, Spinner, Text, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
// import { getUser } from "../Api/api";
import img from "../../assets/boon.png";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row   h-full w-full items-center gap-3 ">
      <div className="mt-8 flex flex-col items-center justify-center mb-6 flex-1">
        <Text className="text-4xl md:text-4xl lg:text-6xl mb-3   font-sans text-center flex-1">
          Store Your Notes
        </Text>
        <Text className="font-sans text-center mb-6">Soon more features will be available</Text>
        <Button onClick={() => navigate("/upload")}>Get Started</Button>
      </div>
      <div className=" items-center justify-end  flex-1 ">
        <div className="mt-8 ">
          <img
            className="rounded-[30%]"
            height={"400px"}
            width="400px"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
