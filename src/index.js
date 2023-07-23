import React from 'react';
import { createRoot } from "react-dom/client";
import { Box } from "@mui/material";
import NavigationBar from './components/NavigationBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <DashboardPage />
      </ThemeProvider>
    </Box>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

