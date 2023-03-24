import React from "react";
import { Action } from "./Action";
import { AiOutlineHome } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { AnimateComponent } from "@/utils/AnimateComponent";

const ProyectCard = ({ proyect, customDelay }) => {
  return (
    <AnimateComponent customDelay={customDelay}>
      <li
        key={proyect.name}
        className="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-200 dark:border-gray-500 rounded-lg transition ease-in-out duration-300"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex flex-1 items-center justify-start w-full">
            {proyect.icon && typeof proyect.icon === "string" ? (
              <>{proyect.icon}</>
            ) : (
              <>🌐</>
            )}
            <div className="min-w-0 flex-1 px-4">
              <h1 className="text-gray-600 dark:text-white text-lg font-bold">
                {proyect.name}
              </h1>
              {proyect.description && (
                <p className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-xs">
                  {proyect.description}
                </p>
              )}
            </div>
          </div>

          <div className="inline-flex items-center justify-end space-x-2 gap-2 w-full sm:w-auto mt-4 sm:mt-1">
            {proyect.homepage && (
              <Action
                href={proyect.homepage}
                ariaLabel={proyect.name + "homepage"}
              >
                <span className="sr-only">{proyect.name + "homepage"}</span>
                <AiOutlineHome size={20} />
              </Action>
            )}
            <Action href={proyect.url} ariaLabel={"GitHub Repository"}>
              <span className="sr-only">GitHub Repository</span>
              <FiGithub size={20} />
            </Action>
          </div>
        </div>
      </li>
    </AnimateComponent>
  );
};

export default ProyectCard;
