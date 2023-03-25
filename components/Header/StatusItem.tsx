"use client";
import { Indicator } from "@/app/components/Discord";
import { useStatus } from "@/lib";
import { AnimateComponent } from "@/utils/AnimateComponent";
import Link from "next/link";

const colors = {
  green: "bg-green-400",
  red: "bg-red-400",
  yellow: "bg-yellow-400",
};

const StatusItem = () => {
  const { color, status, loading } = useStatus();
  if (loading) return;
  return (
    <AnimateComponent>
      <Link
        href={"/estado"}
        className="flex w-full lg:w-[118px] lg:dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-400 lg:bg-gray-50 gap-2  items-center lg:justify-center text-gray-600 text-md  lg:rounded-md lg:hover:bg-gray-200 dark:hover:text-gray-200 transition-all px-4 lg:px-3 py-4 lg:py-2"
      >
        <Indicator
          bgColor={colors[color]}
          pulse={status.discord_status !== "offline"}
        />
        Estado
      </Link>
    </AnimateComponent>
  );
};

export default StatusItem;
