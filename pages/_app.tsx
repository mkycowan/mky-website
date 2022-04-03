import "../styles/globals.css";
import type { AppProps } from "next/app";

import { DefaultLayout } from "@components/layouts/default-layout";

// Contexts
import { LayoutContext } from "@contexts/layout-context";

function MyApp({ Component, pageProps }: AppProps) {
  const value = {
    isMobileMenuOpen: false,
  };
  return (
    <div className="min-h-screen flex flex-col text-gray-50 bg-zinc-900">
      <LayoutContext.Provider value={value}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </LayoutContext.Provider>
    </div>
  );
}

export default MyApp;
