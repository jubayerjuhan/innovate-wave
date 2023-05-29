import { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import "../styles/globals.scss";
import "../styles/main.scss";
import localFont from "@next/font/local";
import { Inter } from "next/font/google";

const calibreFont = localFont({
  src: [
    {
      path: "../font/test-calibre-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/test-calibre-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});
export const interFont = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${calibreFont.className} `}>
      <Component {...pageProps} />
    </main>
  );
}
