import { Box, Button, Paper, SwipeableDrawer,useMediaQuery } from "@mui/material";
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
  const isScreenBelow600px = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Box sx={{ position: "relative" }}>
      <Box
        onClick={handleToggle}
        sx={{
          position: "relative",
          width: "75%",
          margin: "4em",
          marginLeft: position ? "auto" : "1em",
          marginRight: position ? "1em" : "auto",
          "&:hover": {
            boxShadow: 20,
            transition: "box-shadow 0.1s ease-in-out"
          },
          borderRadius: theme.borderRadius,
          overflow: "hidden"
        }}
      >
        <GreyOverlay show={isOpen} handleToggle={handleToggle} />
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
              width: "100%",
            },
            width: "calc(100% - 22.5em)",
            backgroundColor: theme.colours.beige2,
            position: "absolute",
            zIndex: 1000,
            top: "-10em",
            left: position ? "0" : "auto",
            right: position ? "auto" : "0",
            // whiteSpace: !isScreenBelow600px ? "nowrap" : "",
          }}
        >
          {item.title}
        </Paper>
      </Slide>
    </Box>
  );
};

export default ArticalContainer;
