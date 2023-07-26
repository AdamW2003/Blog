import React from "react";
import { createRoot } from "react-dom/client";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import DashboardPage from "./pages/DashboardPage";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ArticleProvider } from "./data/ArticleContext";

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <ArticleProvider>
          <CssBaseline />
          <DashboardPage />
        </ArticleProvider>
      </ThemeProvider>
    </Box>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
