import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  ChakraProvider,
  ColorModeProvider,
  Container,
  ThemeProvider,
} from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ReactQueryDevtools } from "react-query/devtools";

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChakraProvider>
          {/* <ThemeProvider> */}
            <ColorModeProvider>
              <App />
            </ColorModeProvider>
          {/* </ThemeProvider> */}
        </ChakraProvider>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
