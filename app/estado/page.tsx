import React from "react";
import { Widget } from "../components/Discord";

const page = () => {
  return (
    <div className="h-screen w-full">
      <h1 className="font-bold  text-3xl lg:text-4xl text-center mt-11 tracking-tight text-black dark:text-white mx-auto lg:mx-0">
        Discord
      </h1>
      <div className="mt-20 w-full">
        <Widget />
      </div>
    </div>
  );
};

export default page;
