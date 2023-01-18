import "@/styles/globals.css";
import Axios from "axios";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL + "/api";
  return <Component {...pageProps} />;
}
