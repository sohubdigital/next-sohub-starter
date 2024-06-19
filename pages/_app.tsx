import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { GeistSans } from "geist/font/sans";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${GeistSans.variable} font-geist font-wrapper`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
