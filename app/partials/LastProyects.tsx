"use client";
import Image from "next/image";
import { AnimateComponent } from "@/utils/AnimateComponent";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Link from "next/link";

const lastProyects = [
  {
    image:
      "https://res.cloudinary.com/dlekwh1wn/image/upload/v1670735265/PawsFounding_ip2y5g.png",
    title: "Paws Founding",
    repo: "https://github.com/lioarce01/PF-Henry-Grupo05",
    link: "http://pf-henry-grupo05.vercel.app/",
    description:
      "Diseñar y desarrollar una App de crowdfounding con funciones de red social. Incluye creación y autenticación de usuarios, filtros, búsquedas, posteos, comentarios, donaciones a través de mercadopago, creación de organizaciones, etc.",
  },
  {
    image:
      "https://res.cloudinary.com/dlekwh1wn/image/upload/v1670736165/countries-activites_ypov6w.png",
    title: "Countries - Activities",
    repo: "https://github.com/Ismox1440/PI-Countries-main",
    link: "https://countries-activities.ga/",
    description:
      "Desarrollo de una app web de paises y actividades turisticas, la misma muestra una lista de todos los paises de forma minimalista, con diferentes filtros y ordenamientos combinados. Una de las principales funciones es la de poder crear actividades turísticas y filtrar paises con estas mismas.",
  },
];

const myGithub = "https://github.com/Ismox1440";

const LastProyects = () => {
  return (
    <AnimateComponent customClassName="w-full flex flex-col justify-center text-center lg:items-start mb-16">
      <h2 className="font-bold text-2xl lg:text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start">
        Ultimos Proyectos
      </h2>

      <p className="text-base text-gray-600 dark:text-gray-400 mb-10 text-start">
        Últimos proyectos en los que he trabajado. Para ver más, visita mi
        perfil en {""}
        <a
          href={myGithub}
          aria-label="github"
          title="github"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white hover:underline transition-all ease"
        >
          GitHub
        </a>
        .
      </p>

      <ul className="flex gap-6 ">
        {lastProyects.map((p) => (
          <>
            <li
              key={p.title}
              className=" w-full bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20 bg-opacity-20 backdrop-filter backdrop-blur-sm  rounded-xl dark:border-gray-700 border border-gray-300"
            >
              <div className="flex mx-auto items-center justify-center mt-6 gap-11">
                <Link
                  href={p.repo}
                  target="_blank"
                  aria-label={p.title}
                  title={p.title}
                  className="group w-9 h-9 bg-dark rounded-lg bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-10 ring-1 ring-gray-200 hover:ring-gray-200 dark:ring-gray-700 dark:hover:ring-gray-600  group-hover:text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-200 flex items-center justify-center transition ease"
                >
                  <AiFillGithub />
                </Link>
                <Link
                  href={p.link}
                  target="_blank"
                  className=" self-end w-9 h-9 bg-dark rounded-lg bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-10 ring-1 ring-gray-200 hover:ring-gray-200 dark:ring-gray-700 dark:hover:ring-gray-600  group-hover:text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-200 flex items-center justify-center transition ease"
                >
                  <AiOutlineLink />
                </Link>
              </div>
              <div className="relative rounded-[15px] bg-inherit p-6">
                <div className="space-y-3">
                  <Image
                    width={400}
                    height={400}
                    src={p.image}
                    alt={p.title}
                    className="rounded mx-auto shadow-[inset_0_-2px_4px_rgba(0,0,0,1)]"
                  />
                  <p className="text-lg dark:text-gray-50 font-semibold text-slate-800">
                    {p.title}
                  </p>
                  <p className="font-md text-slate-500">{p.description}</p>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </AnimateComponent>
  );
};

export default LastProyects;

// const proyect = () => (

// );
