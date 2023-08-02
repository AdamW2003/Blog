import { Paper, Typography, useMediaQuery } from "@mui/material";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material/styles";
import React from "react";

const SlideOut = ({ item, position, isOpen }) => {
  const theme = useTheme();
  const isScreenBelow600px = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Slide
      direction={position ? "right" : "left"}
      in={isOpen}
      mountOnEnter
      unmountOnExit
      sx={{
        position: "fixed",
        width: "75vw",
        zIndex: 999,
        right: position ? 0 : "auto",
        backgroundColor: theme.colours.beige1,
        padding: "1em"
      }}
    >
      <Paper>
        <Typography variant="h1" sx={{ padding: "0 0 1em 0", fontWeight: "bold" }}>
          {item.title}
        </Typography>
        <Typography variant="p">{item.content}</Typography>
      </Paper>
    </Slide>
  );
};

export default SlideOut;
