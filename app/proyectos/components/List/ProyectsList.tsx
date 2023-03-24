import { fetchProjects } from "@/lib/github";
import React from "react";
import ProyectCard from "./ProyectCard";

const ProyectsList = async () => {
  const proyects = await fetchProjects();
  return (
    <ul className="flex flex-col w-full gap-3">
      {proyects.map((proyect, index) => (
        <ProyectCard
          customDelay={ index / 10 + 0.3}
          proyect={proyect}
          key={proyect.name}
        />
      ))}
    </ul>
  );
};

export default ProyectsList;
