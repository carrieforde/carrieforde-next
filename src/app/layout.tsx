import type { Metadata } from "next";

import "@/components/theme/theme.css";
import "@/styles/global.css";
import { Logo } from "@/assets/logo/logo";
import { IconEnvelope } from "@/components/icons/icon-envelope";
import { IconGithub } from "@/components/icons/icon-github";
import { IconLinkedin } from "@/components/icons/icon-linkedin";
import { Link } from "@/components/link/link";
import { Menu } from "@/components/menu/menu";
import { Site } from "@/components/site/site";
import { Text } from "@/components/text/text";
import { ibmPlexMono, libreFranklin } from "@/components/theme/fonts/fonts";
import { VisuallyHidden } from "@/components/visually-hidden/visually-hidden";

export const metadata: Metadata = {
  title: {
    template: "%s | Carrie Forde",
    default: "Carrie Forde",
  },
  description:
    "Carrie Forde is a front end software engineer in San Mateo, California who specializes in building elegant, maintainable, and performant websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Site>
          <Site.Header>
            <Site.Branding siteName="Carrie Forde">
              <Logo />
            </Site.Branding>
            <Site.Navigation>
              <Menu.Item href="/about">About</Menu.Item>
              <Menu.Item href="/experience">Experience</Menu.Item>
              <Menu.Item href="/blog">Blog</Menu.Item>
            </Site.Navigation>
          </Site.Header>
          <Site.Main>{children}</Site.Main>
          <Site.Footer key="footer">
            <Text variant="finePrint">
              <Link href="/privacy">Privacy</Link> &bull; Copyright © 2013
              &ndash; {new Date().getFullYear()} Carrie Forde.
            </Text>
            <Menu>
              <Menu.Item key="email" href="mailto:carrie@carrieforde.com">
                <IconEnvelope />
                <VisuallyHidden>Email</VisuallyHidden>
              </Menu.Item>

              <Menu.Item
                key="linkedIn"
                href="https://linkedin.com/in/carrieforde"
              >
                <IconLinkedin />
                <VisuallyHidden>LinkedIn</VisuallyHidden>
              </Menu.Item>

              <Menu.Item key="github" href="https://github.com/carrieforde">
                <IconGithub />
                <VisuallyHidden>GitHub</VisuallyHidden>
              </Menu.Item>
            </Menu>
          </Site.Footer>
        </Site>
      </body>
    </html>
  );
}
