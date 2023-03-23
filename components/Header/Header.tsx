import React from "react";
import NavItem from "./NavItem";
import { BiArchive, BiHomeAlt2 } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import ThemeButton from "./ThemeButton";
import StatusItem from "./StatusItem";
import { AnimateComponent } from "@/utils/AnimateComponent";

const Header = () => {
  return (
    <div className="w-full  lg:min-w-xs  backdrop-blur-sm lg:max-w-screen-lg rounded-b-3xl sticky top-0 flex flex-col justify-center items-center z-10 transition ease-in-out mx-auto">
      <nav className="w-full flex items-center justify-start lg:justify-between flex-row-reverse lg:flex-row relative border-gray-200 dark:border-gray-700 px-5 py-8 sm:pb-8 text-gray-900 bg-opacity-60 dark:text-gray-100 gap-5 lg:gap-0">
        <AnimateComponent>
          <div className="flex gap-2">
            <NavItem icon={<BiHomeAlt2 size={20} />} title="Inicio" />
            <NavItem icon={<BiArchive size={20} />} title="Proyectos" />
            <NavItem icon={<BsPerson size={20} />} title="Sobre Mi" />
            <StatusItem />
          </div>
        </AnimateComponent>
        <ThemeButton />
      </nav>
    </div>
  );
};

export default Header;
