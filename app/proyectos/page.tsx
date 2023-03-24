
import { fetchProjects } from "@/lib/github";
import React, { Suspense } from "react";
import ProyectsList from "./components/List/ProyectsList";


const page = () => {
  return (
    <div className="h-screen w-full flex mt-11 justify-center">
      <div className="relative max-w-xl w-full mx-auto">
        {/* @ts-expect-error Server Component */}
        <ProyectsList />
      </div>
     
    </div>
  );
};

export default page;
