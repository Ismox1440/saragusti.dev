import { AnimateComponent } from "@/utils/AnimateComponent";
import SkillsAndTools from "./components/SkillsAndTools";

const page = () => {
  return (
    <section className="w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16 px-5">
      <div className="w-full flex flex-col gap-6">
        <AnimateComponent>
          <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-8 text-black dark:text-white text-center">
            Sobre mi
          </h2>

          <p className="text-base text-gray-600 dark:text-gray-400">
            Mi nombre es Ismael Saragusti, tengo 20 años y soy de Córdoba,
            Argentina. Comencé a aprender programación web de forma autodidacta
            en 2021 y luego me inscribí en el bootcamp de SoyHenry como
            desarrollador Full Stack MERN. Durante mi formación, adquirí
            experiencia académica en el uso de las tecnologías de este stack,
            incluyendo TypeScript, así como también aprendí diferentes
            frameworks como Next.js, Tailwind y Zustand, entre otros.
          </p>
        </AnimateComponent>
        <SkillsAndTools />
      </div>
    </section>
  );
};

export default page;
