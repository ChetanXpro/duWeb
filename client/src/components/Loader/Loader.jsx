import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <div>
      <Spinner
        size={"xl"}
        className="fixed top-[50%] left-[50%] bottom-0 right-0 z-50 "
      />
    </div>
  );
};

export default Loader;
