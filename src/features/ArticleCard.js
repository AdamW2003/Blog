import { Box, Button, Paper, SwipeableDrawer, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import DynamicImage from "../modules/DynamicImage";
import DateFormatter from "../modules/DateFormatter";
import LeftArtical from "../components/LeftArticle";
import RightArtical from "../components/RightArticle";

const ArticalCard = ({ item, position, handleToggle }) => {
  const theme = useTheme();
  const isScreenBelow600px = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Paper
      onClick={handleToggle}
      sx={{
        backgroundColor: theme.colours.beige2,
        maxHeight: isScreenBelow600px ? "40vh" : "70vh",
        display: "flex",
      }}
    >
      {!position ? <LeftArtical item={item}/> : <RightArtical item={item}/>}
    </Paper>
  );
};

export default ArticalCard;
