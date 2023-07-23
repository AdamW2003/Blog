import {Box} from "@mui/material";
import { Fragment } from "react";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
  
const Dashboard = () => {
  return (
    <Fragment>
      <Box className="dashboard">
        <NavigationBar />
        <SideBar />
      </Box>
    </Fragment>
  );
};
  
  export default Dashboard;
  