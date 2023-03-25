import { AnimateComponent } from "@/utils/AnimateComponent";
import Link from "next/link";
import {
  BsDiscord,
  BsFillTelephoneFill,
  BsLinkedin,
  BsMailbox2,
  BsTwitter,
} from "react-icons/bs";

const contactItems = [
  {
    name: "Correo",
    value: "ismael.saragusti24@gmail.com",
    href: "mailto:ismael.saragusti24@gmail.com",
    blank: true,
    icon: <BsMailbox2 size={30} />,
  },
  {
    name: "Celular",
    value: "+543515067034",
    href: "https://wa.link/q8umql",
    blank: true,
    icon: <BsFillTelephoneFill size={30} />,
  },
  {
    name: "Linkedin",
    value: "Ismael Saragusti",
    href: "https://www.linkedin.com/in/ismael-saragusti-664260213/",
    blank: true,
    icon: <BsLinkedin size={30} />,
  },
  {
    name: "Twitter",
    value: "@ismaadev",
    href: "https://twitter.com/ismaadev",
    blank: true,
    icon: <BsTwitter size={30} />,
  },
  {
    name: "Discord",
    value: "Isma#8188",
    href: "/estado",
    icon: <BsDiscord size={30} />,
  },
];

const Contact = () => {
  return (
    <AnimateComponent>
      <h2 id="contact" className="font-bold text-2xl md:text-2xl tracking-tight text-black dark:text-white text-start">
        Contacto
      </h2>
      <p className="text-base text-gray-600 dark:text-gray-400">
        Si desea contactarme, puede hacerlo a través de las siguientes opciones:
      </p>
      <div className="w-full flex justify-between items-center flex-wrap flex-col lg:flex-row gap-6 my-10">
        {contactItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            rel="noreferrer"
            aria-label={item.value}
            title={item.name}
            target={item.blank && "_blank"}
            className="group w-full"
          >
            <div className="flex gap-6 items-center  rounded border border-gray-200 dark:border-gray-800   bg-gray-50 dark:bg-gray-900 p-4 hover:border-gray-700 dark:hover:border-gray-300  sm:p-6 transition ease">
              {item.icon}
              <div>
                <h6 className="font-bold text-1xl tracking-tight text-black dark:text-white text-start">
                  {item.name}
                </h6>
                <p className="text-base  text-gray-600 dark:text-gray-400">
                  {item.value}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AnimateComponent>
  );
};

export default Contact;
