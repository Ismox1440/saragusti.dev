import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "./partials/Footer";
import Header from "@/components/Header/Header";
import { CirclesColorBg } from "@/components/CirclesColorBg";
import { Providers } from "./Provider";

const interVariable = Inter();

export const metadata = {
  openGraph: {
    title: "Ismael Saragusti - Portfolio",
    description:
      "Descubre mi portafolio personal donde podrás encontrar información sobre mí, así como mis proyectos más recientes. Además, encontrarás múltiples formas de contactarme para cualquier duda o consulta.",
    images: "../public/images/og-image",
  },
  title: "Ismael Saragusti",
  generator: "Next.js",
  icons: [{ rel: "icon", url: "./" }],
  applicationName: "ismael saragusti porfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Ismael",
    "Saragusti",
    "Ismael Saragusti",
    "ismael saragusti",
    "ismael saragusti portfolio",
    "saragusti porfiolio",
    "ismael portfolio",
    "saragusti.dev",
    "desarrollador",
    "desarrollador web",
    "Ismael Saragusti Linkedin",
    "Ismox1400 github",
  ],
  authors: [{ name: "Isma", url: "https://saragusti.dev" }],
  colorScheme: "dark",
  creator: "Ismael Saragusti",
  publisher: "Ismael Saragusti",
  alternates: {},
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 dark:bg-gray-900 transition ease">
        <Providers>
          <Header />
          <main
            className={
              interVariable.className +
              " min-w-xs max-w-screen-lg flex flex-col justify-center items-center mx-auto"
            }
          >
            {children}
          </main>
          <Footer />
          <CirclesColorBg />
        </Providers>
      </body>
    </html>
  );
}
