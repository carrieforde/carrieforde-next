/* eslint-disable camelcase */
import { IBM_Plex_Mono, Libre_Franklin } from "next/font/google";

export const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-family-libre-franklin",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-family-ibm-plex-mono",
  weight: ["400"],
});
