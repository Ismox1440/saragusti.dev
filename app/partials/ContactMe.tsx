import { AnimateComponent } from "@/utils/AnimateComponent";
import { BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

export const ContactMe = () => {
  return (
    <AnimateComponent customClassName="w-full">
      <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start">
        Contactame
      </h2>

      <div className="w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-6 mb-10">
          <a
            href="mailto:ismael.saragusti24@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group w-full"
          >
            <div className="flex gap-6 items-center  rounded border border-gray-200 dark:border-gray-800   bg-gray-50 dark:bg-gray-900 p-4  sm:p-6 transition ease">
              <BsMailbox2 size={30} />
              <div>
                <h6 className="font-bold text-1xl tracking-tight text-black dark:text-white text-start">
                  Correo
                </h6>
                <p className="text-base  text-gray-600 dark:text-gray-400">
                  ismael.saragusti24@gmail.com
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://walink.co/2369d5"
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <div className="flex gap-6 items-center  rounded border border-gray-200 dark:border-gray-800   bg-gray-50 dark:bg-gray-900 p-4  sm:p-6 transition ease">
              <BsFillTelephoneFill size={30} />
              <div>
                <h6 className="font-bold text-1xl tracking-tight text-black dark:text-white text-start">
                  Celular
                </h6>
                <p className="text-base  text-gray-600 dark:text-gray-400">
                  +54 0351 506 7034
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <form
            action="https://formsubmit.co/jeanrdev@gmail.com"
            method="POST"
            className="w-full space-y-4"
          >
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded p-3 text-base outline-none border bg-white dark:bg-inherit border-gray-200 dark:border-gray-800 focus:border-lime-500 dark:focus:border-gray-500 transition ease"
                placeholder="Nombre"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded p-3 text-base outline-none border bg-white dark:bg-inherit border-gray-200 dark:border-gray-800 focus:border-lime-500 dark:focus:border-gray-500 transition ease"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded p-3 text-base outline-none border bg-white dark:bg-inherit border-gray-200 dark:border-gray-800 focus:border-lime-500 dark:focus:border-gray-500 transition ease"
                  placeholder="Celular"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full h-32 rounded p-3 text-base outline-none border bg-white dark:bg-inherit border-gray-200 dark:border-gray-800 focus:border-lime-500 dark:focus:border-gray-500 transition ease"
                placeholder="Mensaje"
                id="message"
                name="message"
                required
              />
            </div>

            <button
              type="submit"
              className="flex gap-2 items-center justify-center rounded px-5 py-3 text-black dark:text-gray-400 bg-white hover:bg-gray-200 dark:bg-inherit dark:border-gray-600 dark:hover:bg-gray-800 border transition ease mx-auto"
            >
              <span className="font-medium text-base">Enviar</span>

              <IoSend className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </AnimateComponent>
  );
};
