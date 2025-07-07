import React from "react";
import { ScaleLoader } from "react-spinners";


const LoaderScale = ({ loading, height = "h-32", color = "#E89141" }) => {
  if (!loading) return null;

  return (
    <div className={`flex justify-center items-center ${height}`}>
      <ScaleLoader
        loading={true}
        color={color}
        height={32}
        width={4}
        radius={2}
        margin={1}
      />
    </div>
  );
};

export default LoaderScale;
