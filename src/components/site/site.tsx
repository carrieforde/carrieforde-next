import * as React from "react";

import { Link } from "@/components/link/link";
import { Menu } from "@/components/menu/menu";
import s from "@/components/site/site.module.css";
import {
  SiteBrandingProps,
  SiteComposition,
  SiteHeaderProps,
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
  <div className={s.site}>{children}</div>
);

const Header: React.FC<SiteHeaderProps> = ({ children }) => (
  <header className={s.header}>{children}</header>
);

const Branding: React.FC<SiteBrandingProps> = ({
  children,
  homepagePath = "/",
  siteName,
}) => (
  <div className={s.branding}>
    <Link href={homepagePath}>{children}</Link>
    <VisuallyHidden>{siteName}</VisuallyHidden>
  </div>
);

const Navigation: React.FC<SiteNavigationProps> = ({ children }) => (
  <nav className={s.navigation}>
    <Menu>{children}</Menu>
  </nav>
);

Site.Branding = Branding;
Site.Header = Header;
Site.Navigation = Navigation;
