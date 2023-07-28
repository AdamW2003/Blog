import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import DateFormatter from "../modules/DateFormatter";
import DynamicImage from "../modules/DynamicImage";
import ArticleContent from "./ArticleContent";

const LeftArticle = ({ item }) => {
  const theme = useTheme();

  const containerStyle = {
    display: "flex",
    alignItems: "flex-start", // Align items to the top of the container
    gap: "10px", // Adjust the spacing between elements as needed
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

  return (
    <Box style={containerStyle}>
      <DynamicImage imageName={item.poster} style={imageStyle} />
      <Box style={titleDateContainerStyle}>
        <ArticleContent item={item} />
      </Box>
    </Box>
  );
};

export default LeftArticle;
