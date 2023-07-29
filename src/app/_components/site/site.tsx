import { SiteFooter } from "../site-footer/site-footer";
import { SiteHeader } from "../site-header/site-header";
import s from "./site.module.css";

export const Site: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className={s.site}>
    <SiteHeader />
    <main className={s.siteMain}>{children}</main>
    <SiteFooter />
  </div>
);
