import { ReactElement } from "react";
import Link from "next/link";

const NavItem = ({
  title,
  icon,
  href,
  external,
}: {
  title: string;
  icon: ReactElement;
  href: string;
  external: boolean;
}) => {
  return (
    <Link
      href={href}
      target={external && "_blank"}
      className="flex w-[128px] dark:bg-gray-900 dark:border-gray-600 dark:text-gray-400 bg-gray-50 gap-2 items-center justify-center text-gray-600 text-md border rounded-md hover:bg-gray-200 dark:hover:text-gray-200 transition-all px-3 py-2"
    >
      {icon}
      {title}
    </Link>
  );
};

export default NavItem;
