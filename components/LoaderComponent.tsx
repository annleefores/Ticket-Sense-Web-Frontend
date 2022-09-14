import React from "react";
import { Loader } from "@mantine/core";

const LoaderComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Loader size="xl" variant="dots" />
    </div>
  );
};

export default LoaderComponent;
