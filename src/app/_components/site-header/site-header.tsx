import { MainNavigation } from "../main-navigation/main-navigation";
import { SiteBranding } from "../site-branding/site-branding";
import s from "./site-header.module.css";

export const SiteHeader: React.FC = () => (
  <header className={s.siteHeader}>
    <SiteBranding />
    <MainNavigation />
  </header>
);
