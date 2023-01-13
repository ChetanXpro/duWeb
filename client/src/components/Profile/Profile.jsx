import { Text, Button as CButton } from "@chakra-ui/react";
import React, { useReducer, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

import usePrivateApis from "../../hooks/usePrivateApis";

import { Empty } from "antd";
import Folder from "./Folder";

import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
const Profile = () => {
  const { getCollection, collection } = usePrivateApis();

  const queryClient = useQueryClient();

  const { isLoading, isError, data, error, refetch, isSuccess } = useQuery(
    "collection",
    getCollection
  );

  const refetchData = () => refetch();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex items-center justify-center mt-2 lg:ml-6 md:ml-6 xl:ml-6 lg:p-4 lg:justify-start md:justify-start xl:justify-start flex-wrap md:mt-12 lg:mt-6 xl:mt-10 ">
      {data.arr.length > 0 ? (
        data.arr.map((i) => (
          // <WrapItem>
          <Folder
            key={i.id}
            id={i.id}
            name={i.label}
            totalitemsInside={i.totalNotesInside}
            re={refetchData}
          />
          // </WrapItem>
        ))
      ) : (
        <div className="h-full w-full flex mt-40 lg:mt-4 md:mt-4 xl:mt-4  items-center  justify-center">
          <Empty
            className=""
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: 170,
            }}
            description={
              <Text fontFamily={"fantasy"} fontSize="2xl">
                You dont have any Folders
              </Text>
            }
          >
            <CButton
              width={"40"}
              mt={"5"}
              onClick={() => {
                navigate("/upload");
              }}
              colorScheme="blue"
            >
              Create folder
            </CButton>
          </Empty>
        </div>
      )}
    </div>
  );
};

export default Profile;
