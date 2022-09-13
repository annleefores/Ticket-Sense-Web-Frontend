import React, { useEffect, useState } from "react";
import SlideControl from "../../components/SlideControl";

const Index = () => {
  const [Locdata, setLocdata] = useState("");

  const LocDataFunc = async (params: string) => {
    setLocdata(params);
  };

  useEffect(() => {
    console.log(Locdata);
  }, [Locdata]);

  return (
    <div className="flex flex-col justify-center mt-[100px] ">
      <SlideControl LocDataFunc={LocDataFunc} />
    </div>
  );
};

export default Index;
