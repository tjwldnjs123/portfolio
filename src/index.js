import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import * as Theme from "./styles/Theme";

ReactDOM.render(
  <>
    <GlobalStyle />

    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
