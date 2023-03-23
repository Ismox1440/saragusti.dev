"use client";
import { useEvent } from "react-use";
import useClick from "@/lib/sound";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [play] = useClick();
  useEvent("mousedown", () => play());
  useEvent("mouseup", () => play());
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
