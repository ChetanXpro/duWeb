import { PaperClipOutlined } from "@ant-design/icons";
import React from "react";


const UploadedFiles = ({ fileName, fileSize }) => {
  return (
    <div className="w-full justify-around flex items-center border border-dashed text-white h-8 rounded">
      <span className="w-4 pl-1 flex items-center">
        <PaperClipOutlined />
      </span>
      <span className="flex p-2 text-sm  flex-1">
        {fileName?.length > 30 ? `${fileName?.slice(0, 30)}..` : fileName}
      </span>
      <span className="w-24 text-sm">{fileSize}</span>
    </div>
  );
};

export default UploadedFiles;
