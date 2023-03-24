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
  console.log(color)
  if (loading) return;
  return (
    <AnimateComponent>
      <Link
        href={"/estado"}
        className="flex w-[118px] dark:bg-gray-900 dark:border-gray-600 dark:text-gray-400 bg-gray-50 gap-1 items-center justify-center text-gray-600 text-md border rounded-md hover:bg-gray-200 dark:hover:text-gray-200 transition-all px-3 py-2"
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
