import React from "react";
import { render } from "@testing-library/react";
import DarkModeProvider from "./context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes } from "react-router-dom";
const queryClient = new QueryClient();

const AllTheProviders = ({ children }) => {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <BrowserRouter>
          <Routes>{children}</Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
