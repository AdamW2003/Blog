import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import DateFormatter from "../modules/DateFormatter";
import DynamicImage from "../modules/DynamicImage";
import ArticleContent from "./ArticleContent";

const LeftArticle = ({ item }) => {
  const theme = useTheme();
  const isScreenBelow600px = useMediaQuery(theme.breakpoints.down("sm")); // Adjust the breakpoint as needed

  const containerStyle = {
    display: "flex",
    marginLeft: "1em"
  };

  const imageStyle = {
    height: "94%",
    borderRadius: "5px",
    display: "block",
    margin: "auto 1em auto 1em",
  };

  const titleDateContainerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "1em 0",
  };

  if (isScreenBelow600px) {
    return (
      <Box style={containerStyle}>
        <Box style={titleDateContainerStyle}>
          <ArticleContent item={item} />
        </Box>
      </Box>
    );
  }

  return (
    <Box style={containerStyle}>
      <Box style={titleDateContainerStyle}>
        <ArticleContent item={item} />
      </Box>
      <DynamicImage imageName={item.poster} style={imageStyle} />
    </Box>
  );
};

export default LeftArticle;
