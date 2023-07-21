import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "@app/store";
import { DashboardLayout } from "@design-system/template";
import { getSessionToken } from "@helpers/session-manager";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [authToken, setAuthToken] = useState<string | null | undefined>();

  useEffect(() => {
    setAuthToken(getSessionToken());
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider>
        {authToken ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </ChakraProvider>
    </Provider>
  );
}
