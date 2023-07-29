"use client";

import { usePathname } from "next/navigation";

import NextLink from "next/link";
import { Link, LinkProps } from "components/link/link";

import s from "./main-navigation.module.css";

type NavigationLinkProps = LinkProps;

const NavigationLink: React.FC<NavigationLinkProps> = ({
  children,
  ...props
}) => {
  const pathname = usePathname();

  const isActive = pathname === props.href;

  return (
    <NextLink href={props.href as string} legacyBehavior passHref>
      <Link
        {...props}
        className={s.link}
        variant="navigation"
        isActive={isActive}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export const MainNavigation = () => (
  <nav className={s.mainNavigation}>
    <NavigationLink href="/about">About</NavigationLink>
    <NavigationLink href="/experience">Experience</NavigationLink>
    <NavigationLink href="/blog">Blog</NavigationLink>
  </nav>
);
