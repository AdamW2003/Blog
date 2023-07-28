import { Box, Button, Paper, SwipeableDrawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import ArticalCard from "./ArticleCard";
import GreyOverlay from "../components/GreyOverlay";

const ArticalContainer = ({ item, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const theme = useTheme();

  return (
    <Box  sx={{ position: "relative" }}>
      <Box onClick={handleToggle} sx={{ position: "relative" }}>
        <GreyOverlay show={isOpen} handleToggle={handleToggle}/>
        <ArticalCard item={item} position={position} />
      </Box>
      <Slide
        direction={position ? "right" : "left"}
        in={isOpen}
        mountOnEnter
        unmountOnExit
      >
        <Paper
          sx={{
            height: "75hv",
            [theme.breakpoints.down("sm")]: {
              width: "100%"
            },
            width: "calc(100% - 22.5em)",
            backgroundColor: theme.colours.beige2,
            position: "absolute",
            zIndex: 1000,
            top: "-10em",
            left: position ? "0" : "auto",
            right: position ? "auto" : "0",
          }}
        >
          {item.title}
        </Paper>
      </Slide>
    </Box>
  );
};

export default ArticalContainer;
