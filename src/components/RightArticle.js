import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import DynamicImage from "../modules/DynamicImage";
import DateFormatter from "../modules/DateFormatter";
import ArticleContent from "./ArticleContent";

const RightArticle = ({ item }) => {
  const theme = useTheme();

  const containerStyle = {
    display: "flex",
    alignItems: "flex-start", // Align items to the top of the container
    gap: "10px", // Adjust the spacing between elements as needed
    width: "100%",
  };

  const imageStyle = {
    height: "94%",
    borderRadius: "5px",
    display: "block",
    margin: "auto 1em auto auto",
  };

  const titleDateContainerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
  };

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
