import { Spinner, Text, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
// import { getUser } from "../Api/api";
import img from "../../assets/med.png";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex  h-full w-full items-center gap-3 ">
      <Text className="text-6xl font-sans text-center flex-1">Store Your Notes</Text>
      <div className=" items-center justify-end  flex-1 ">
        <div className="mt-8 ">
          <img
            className="rounded-[40%]"
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
