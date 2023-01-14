import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChakraProvider>
            <ColorModeProvider>
    <App />
           </ColorModeProvider>
       
        </ChakraProvider>
      </BrowserRouter>
    
    </QueryClientProvider>
  </React.StrictMode>
);

