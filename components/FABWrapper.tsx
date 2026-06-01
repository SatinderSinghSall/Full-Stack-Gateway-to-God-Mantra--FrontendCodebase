"use client";

import { usePathname } from "next/navigation";
import FAB from "./FAB";

export default function FABWrapper() {
  const pathname = usePathname();

  const hiddenRoutes = ["/login", "/signup"];

  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return <FAB />;
}
