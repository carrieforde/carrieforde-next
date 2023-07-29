import { Envelope, Github, LinkedIn, Text } from "components";
import { Link } from "components/link/link";
import s from "./site-footer.module.css";

export const SiteFooter = () => (
  <footer className={s.siteFooter}>
    <div className={s.copyright}>
      <Link href="/" color="inherit" className={s.link}>
        Privacy
      </Link>
      <Text as="span" variant="finePrint">
        &bull;
      </Text>
      <Text as="span" variant="finePrint">
        Copyright &copy; 2013 &ndash; {new Date().getFullYear()} Carrie Forde.
      </Text>
    </div>

    <ul className={s.menu}>
      <li>
        <Link color="primary" href="mailto:carrie@carrieforde.com">
          <Envelope />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/carrieforde">
          <Github />
        </Link>
      </li>
      <li>
        <Link href="https://linkedin.com/in/carrieforde">
          <LinkedIn />
        </Link>
      </li>
    </ul>
  </footer>
);
