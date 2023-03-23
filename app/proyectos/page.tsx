import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="relative max-w-xl w-full mx-auto">
        <ul className="flex flex-col w-full space-y-4">
          <div className="w-full bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-200 dark:border-gray-500 rounded-lg transition ease-in-out duration-300">
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6">
              <div className="flex flex-1 items-center justify-start w-full">
                <span className="text-xl">🐶</span>
                <div className="min-w-0 flex-1 px-4">
                  <h2 className="text-gray-700 dark:text-white text-lg font-bold">
                    titulo
                  </h2>
                  <p className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-xs">
                    desc
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center justify-end space-x-2 w-full sm:w-auto mt-4 sm:mt-1">
                <a
                  className="relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2  hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default-transition default-focus"
                  aria-label="paws-founding homepage"
                  href="https://pf-henry-grupo05.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">paws-founding homepage</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="mt-1 iconify iconify--feather"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <path d="M9 22V12h6v10"></path>
                    </g>
                  </svg>
                </a>
                <a
                  className="relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-700 dark:hover:text-white border border-gray-100 dark:border-gray-500 rounded-lg text-sm font-medium default-transition default-focus"
                  aria-label="GitHub Repository"
                  href="https://github.com/ismox1440/paws-founding"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">GitHub Repository</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="mt-1 iconify iconify--feather"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default page;
