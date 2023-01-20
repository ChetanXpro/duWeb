import { Heading, Text } from "@chakra-ui/react";
import { Select } from "antd";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getUniversityDetails, getUniversityList } from "../../Api/api";

const PublicNotes = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("");

  const { data: universityList } = useQuery(
    "universityList",
    getUniversityList
  );

  const { data, mutate, isLoading } = useMutation(getUniversityDetails);

  const handleSelected = (value) => {
    mutate(value);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <Heading>Search of Notes</Heading>
      </div>
    </div>
  );
};
'pending appoval' 
export default PublicNotes;

{
  /* <Select
          showSearch
          onSelect={handleSelected}
          style={{
            width: 200,
          }}
          placeholder="Search University"
          optionFilterProp="children"
          filterOption={(input, option) => {
            return option.label.toLowerCase().includes(input.toLowerCase());
          }}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={universityList}
        />
        <Select
          showSearch
          onSelect={(value) => setSelectedUniversity(value)}
          style={{
            width: 200,
          }}
          placeholder="Search Your course"
          optionFilterProp="children"
          filterOption={(input, option) => {
            return option.label.toLowerCase().includes(input.toLowerCase());
          }}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={data?.course}
        /> */
}
