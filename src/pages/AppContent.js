import { Box } from "@mui/material";
import { AppBarContext } from "components/appBar";
import { useContext } from "react";

const AppContent = ({ children }) => {
  const { isExpanded } = useContext(AppBarContext);
  return (
    <Box
      className="app-content"
      sx={({ sizes }) => ({
        marginTop: `${sizes.topBarHeight}px`,
        marginLeft: `${isExpanded ? sizes.sideMenuWidth : sizes.sideMargin}px`,
        width: `calc(100vw - ${
          isExpanded ? sizes.sideMenuWidth : sizes.sideMargin
        }px)`,
        minHeight: `calc(100vh - ${sizes.topBarHeight}px)`,
      })}
    >
      {children}
    </Box>
  );
};

export default AppContent;