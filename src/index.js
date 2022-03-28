import React, { StrictMode } from "react";
import { render } from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";

const theme = extendTheme({
  fonts: {
    heading: "Maven Pro, sans-serif",
    body: "Roboto, sans-serif"
  },
  colors: {
    brandLight: {
      500: "#057bff"
    },
    brandDark: {
      500: "#001560"
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif"
      }
    }
  }
});

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App className="pattern" />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
