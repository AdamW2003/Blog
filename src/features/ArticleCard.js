import { Box, Button, Paper, SwipeableDrawer, Typography } from "@mui/material";
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

  const imageStyle = {
    height: "94%",
    borderRadius: "5px",
    display: "block",
    margin: position ? "auto 1em auto auto" : "auto auto auto 1em",
  };

  return (
    <Paper
      onClick={handleToggle}
      sx={{
        backgroundColor: theme.colours.beige2,
        height: "40vh",
        width: "80%",
        margin: "2em",
        display: "flex",
        marginLeft: position ? "auto" : "1em",
        marginRight: position ? "1em" : "auto",
      }}
    >
      {!position ? <LeftArtical item={item}/> : <RightArtical item={item}/>}
    </Paper>
  );
};

export default ArticalCard;
