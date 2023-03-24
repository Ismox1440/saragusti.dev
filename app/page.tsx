import { Inter } from "next/font/google";
import { Hero } from "./partials/Hero";
import { AboutMe, LastProyects, ContactMe } from "./partials/";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full lg:min-w-xs lg:max-w-screen-lg flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16 px-5">
      <Hero />
      <div className="w-full flex flex-col items-start">
        <AboutMe />
        <LastProyects />
        <ContactMe />
      </div>
    </div>
  );
}
