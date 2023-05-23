import { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import "../styles/globals.scss";
import "../styles/main.scss";

// If loading a variable font, you don't need to specify the font weight
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={dmSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
