import React from "react";

const UploadedFiles = ({ fileName, fileSize }) => {
  return (
    <div className="w-full justify-around flex items-center border border-black h-6 rounded">
      <span className="flex pl-2 text-sm  flex-1">
        {fileName?.length > 30 ? `${fileName?.slice(0, 30)}..` : fileName}
        {/* {fileName} */}
      </span>
      <span className="w-24 text-sm">{fileSize}</span>
    </div>
  );
};

export default UploadedFiles;
