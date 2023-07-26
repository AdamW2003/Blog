import React, { useContext, useEffect, useRef, useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ReviewCard from "../components/ReviewCard";
import { ArticleContext } from "../contexts/ArticleContext";
import { useTheme } from "@mui/material/styles";

const ArticalCard = ({content, position }) => {
  const theme = useTheme();
  return (
    <Paper
      key={content}
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
      {content.title}
    </Paper>
  );
};

export default ArticalCard;
