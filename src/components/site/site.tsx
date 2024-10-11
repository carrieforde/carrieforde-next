import * as React from "react";

import { Box } from "@/components/box/box";
import { Link } from "@/components/link/link";
import { Menu } from "@/components/menu/menu";
import s from "@/components/site/site.module.css";
import {
  SiteBrandingProps,
  SiteComposition,
  SiteFooterProps,
  SiteHeaderProps,
  SiteMainProps,
  SiteNavigationProps,
  SiteProps,
} from "@/components/site/types";
import { VisuallyHidden } from "@/components/visually-hidden/visually-hidden";

/**
 * @todo Move skip link here.
 * @todo Add main
 * @todo Add footer
 */

export const Site: React.FC<SiteProps> & SiteComposition = ({ children }) => (
  <Box className={s.site}>{children}</Box>
);

const Header: React.FC<SiteHeaderProps> = ({ children }) => (
  <Box as="header" className={s.header}>
    {children}
  </Box>
);

const Branding: React.FC<SiteBrandingProps> = ({
  children,
  homepagePath = "/",
  siteName,
}) => (
  <Box className={s.branding}>
    <Link href={homepagePath}>{children}</Link>
    <VisuallyHidden>{siteName}</VisuallyHidden>
  </Box>
);

const Navigation: React.FC<SiteNavigationProps> = ({ children }) => (
  <Box as="nav" className={s.navigation}>
    <Menu>{children}</Menu>
  </Box>
);

const Main: React.FC<SiteMainProps> = ({ children }) => (
  <Box as="main" className={s.main}>
    {children}
  </Box>
);

const Footer: React.FC<SiteFooterProps> = ({ children }) => (
  <Box as="footer" className={s.footer}>
    {children}
  </Box>
);

Site.Branding = Branding;
Site.Header = Header;
Site.Navigation = Navigation;
Site.Main = Main;
Site.Footer = Footer;
