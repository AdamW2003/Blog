import { Box, Paper, Slide, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useState } from "react";
import ArticalCard from "./ArticleCard";
import GreyOverlay from "../components/GreyOverlay";
import SlideOut from "./SlideOut";

const ArticalContainer = ({ item, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const theme = useTheme();
  const isScreenBelow600px = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        onClick={handleToggle}
        sx={{
          margin: "1em",
          "&:hover": {
            boxShadow: 20,
            transition: "box-shadow 0.1s ease-in-out",
          },
          borderRadius: theme.borderRadius,
          marginRight: !position ? "50vw" : "1em",
          float: position ? "right" : "left",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ArticalCard item={item} position={position} />
          <GreyOverlay show={isOpen} handleToggle={handleToggle} />
        </Box>
      </Box>
      <SlideOut item={item} position={position} isOpen={isOpen} />
    </Box>
  );
};

export default ArticalContainer;
