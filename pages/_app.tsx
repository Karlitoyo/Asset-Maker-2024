import "tailwindcss/tailwind.css";
import "../styles/styles.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
  );
}

export default MyApp;