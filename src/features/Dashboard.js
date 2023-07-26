import { AppBar, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import NavigationBar from "./NavigationBar";
import SideBar from "./SideBar";
import Content from "./Content";
import Logo from "../components/Logo";

const Dashboard = () => {
  const theme = useTheme();
  const drawerWidth = 300;

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: theme.colours.beige1,
          overflowX: "hidden",
        }}
      >
        <NavigationBar />
        <Box sx={{ display: "flex" }}>
          <SideBar drawerWidth={drawerWidth} />
          <Content />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Dashboard;
