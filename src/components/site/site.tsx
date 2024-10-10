import * as React from "react";

import { Link } from "@/components/link/link";
import s from "@/components/site/site.module.css";
import {
  SiteBrandingProps,
  SiteComposition,
  SiteHeaderProps,
  SiteProps,
} from "@/components/site/types";
import { VisuallyHidden } from "@/components/visually-hidden/visually-hidden";

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

Site.Branding = Branding;
Site.Header = Header;
