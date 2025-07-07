import React from "react";
import LoaderScale from "./ScaleLoader";

const DataLoader = () => {
  return (
    <div className="text-center text-gray-500 py-10">
      <LoaderScale loading={true} />
    </div>
  );
};

export default DataLoader;
