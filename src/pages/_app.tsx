import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { createTheme, ThemeProvider } from "@mui/material";
import "../global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E88E5",
      light: "#6AB7FF",
      dark: "#005CB2",
    },

    secondary: {
      main: "#81D4FA",
      light: "#B6FFFF",
      dark: "#4BA3C7",
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default appWithTranslation(App);
