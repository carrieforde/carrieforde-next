import "styles/styles.css";
import type { Metadata } from "next";
import { ibmPlexMono, libreFranklin } from "app/_theme/fonts";
import { SiteHeader } from "./_components/site-header/site-header";
import { Site } from "./_components/site/site";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Site>{children}</Site>
      </body>
    </html>
  );
}
