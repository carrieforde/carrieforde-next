import clsx from "clsx";

import s from "@/components/icons/icon.module.css";

export function iconClasses(className?: string) {
  return clsx(s.icon, "icon", className);
}
