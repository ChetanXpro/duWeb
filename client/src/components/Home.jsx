import { Spinner } from "@chakra-ui/react";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
// import { getUser } from "../Api/api";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 mt-20">
      <h2>Login successfuly </h2>
      <h2>API call with auth header to count all users </h2>
      {!isLoading ? (
        <h1>
          Total users tested this project: {JSON.stringify(data?.userCount)}
        </h1>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
