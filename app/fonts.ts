import { DM_Serif_Display, Public_Sans } from "next/font/google";

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif-display",
});

export const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-public-sans",
});
