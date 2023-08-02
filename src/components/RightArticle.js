import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import DynamicImage from "../modules/DynamicImage";
import DateFormatter from "../modules/DateFormatter";
import ArticleContent from "./ArticleContent";

const RightArticle = ({ item }) => {
  const theme = useTheme();
  const isScreenBelow600px = useMediaQuery(theme.breakpoints.down("sm"));
  const containerStyle = {
    display: "flex",
    alignItems: "flex-start", // Align items to the top of the container
    width: "100%",
  };

  const imageStyle = {
    height: "94%",
    borderRadius: "5px",
    display: "block",
    margin: "1em",
    height: "30vh",
    // right: 0
    // minHeight: "85%",
  };

  const titleDateContainerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
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

export default RightArticle;
