import s from "@/components/site/site.module.css";
import { SiteProps } from "@/components/site/types";

export const Site: React.FC<SiteProps> = ({ children }) => (
  <div className={s.site}>{children}</div>
);
