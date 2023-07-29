import { Text } from "components";
import { Logo } from "./internals/logo";
import s from "./site-branding.module.css";

export const SiteBranding: React.FC = () => (
  <div className={s.siteBranding}>
    <Logo />
    <Text className={s.siteTitle}>Carrie Forde</Text>
  </div>
);
