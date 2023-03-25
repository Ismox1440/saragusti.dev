import ProyectsList from "./components/List/ProyectsList";

const page = () => {
  return (
    <div className="h-screen w-full flex mt-11 justify-center">
      <div className="relative max-w-xl w-full mx-auto">
        {/* @ts-expect-error Server Component */}
        <ProyectsList />
        <p className="text-base text-gray-600 dark:text-gray-400 mb-10 text-center mt-11">
          <a
            href="https://github.com/Ismox1440"
            aria-label="github"
            title="github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black text-center dark:hover:text-white hover:underline transition-all ease"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
