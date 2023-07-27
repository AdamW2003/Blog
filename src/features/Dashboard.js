import { AppBar, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import Logo from "../components/Logo";

const Dashboard = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: theme.colours.beige1,
          overflowX: "hidden",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <SideBar/>
          <Content />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Dashboard;
