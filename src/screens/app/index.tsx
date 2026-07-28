import React, { useMemo, useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
// import { ApolloProvider } from "@apollo/client";
// import client from "@graphql";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StylesThemeProvider } from "@mui/styles";
import { darkTheme, lightTheme } from "@styles";

export const useLayoutHook = () => {
  const [isDarkMode, setMode] = useState(false);

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return {
    isDarkMode,
    setMode,
    theme,
  };
};

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useLayoutHook();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.remove();
    }
  }, []);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/icons/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ccff00" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <MaterialThemeProvider theme={theme}>
        <StylesThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </StylesThemeProvider>
      </MaterialThemeProvider>
    </>
  );
}

export default MyApp;
