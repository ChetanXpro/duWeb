import { Divider, Spinner, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import usePrivateApis from "../../hooks/usePrivateApis";
import folder from "../../../public/folder.ico";
import Notes from "./Notes";
import Loader from "../Loader/Loader";
const NotesPage = () => {
  const { getNotes } = usePrivateApis();
  const { id } = useParams();
  const { data, isLoading } = useQuery(["notes", id], getNotes);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex items-center justify-center mt-2 lg:ml-6 md:ml-6 xl:ml-6 lg:p-4 lg:justify-start md:justify-start xl:justify-start flex-wrap md:mt-12 lg:mt-6 xl:mt-10 ">
      {data.arr.map((i) => (
        <Notes key={i.id} name={i.name} url={i.url} />
      ))}
    </div>
  );
};

export default NotesPage;
