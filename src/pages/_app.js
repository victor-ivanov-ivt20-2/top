import { Mulish } from "next/font/google";
import "/src/styles/styles.css";
const mulish = Mulish({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={mulish.className}>
      <Component {...pageProps} />
    </main>
  );
}
