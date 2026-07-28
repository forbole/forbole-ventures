import React from "react";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";

// Separated to use our useSettingsContext hook
function InnerApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default InnerApp;
