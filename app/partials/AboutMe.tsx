import { AnimateComponent } from "@/utils/AnimateComponent";

export const AboutMe = () => {
  return (
    <AnimateComponent customClassName="w-full mb-16 mt-11">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start">
        Sobre mi 
      </h2>

      <p className="text-base text-gray-600 dark:text-gray-400">
        Soy un recién egresado en Desarrollo Web con una pasión por la creación
        de soluciones digitales innovadoras. Siempre busco aprender y crecer
        profesionalmente, explorando nuevas tecnologías y desafíos que me
        permitan seguir evolucionando en mi carrera
      </p>
    </AnimateComponent>
  );
};
