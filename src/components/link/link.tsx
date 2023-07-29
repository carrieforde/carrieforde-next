import { HTMLProps, forwardRef } from "react";
import cn from "classnames";
import s from "./link.module.css";

export type LinkProps = React.PropsWithChildren<{
  variant?: "navigation" | "skipLink";
  color?: "primary" | "inherit";
  isActive?: boolean;
}> &
  HTMLProps<HTMLAnchorElement>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, color, isActive, variant, ...props }, ref) => {
    const linkClasses = cn("link", s.link, className, {
      [s.navigation]: variant === "navigation",
      [s.skipLink]: variant === "skipLink",
      [s.primary]: color === "primary" || variant === "navigation",
      [s.inherit]: color === "inherit",
      [s.navigationActive]: variant === "navigation" && isActive,
    });

    return (
      <a {...props} className={linkClasses} ref={ref}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
