import "../styles/globals.css";
import type { AppProps } from "next/app";

import { DefaultLayout } from "@components/layouts/default-layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex flex-col overflow-hidden text-gray-50 bg-zinc-800">
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </div>
  );
}

export default MyApp;
