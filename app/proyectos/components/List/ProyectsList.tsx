import { fetchProjects } from "@/lib/github";
import ProyectCard from "./ProyectCard";

const ProyectsList = async () => {
  const proyects = await fetchProjects();
  console.log(proyects)
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
