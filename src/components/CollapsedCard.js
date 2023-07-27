import StarIcon from "@mui/icons-material/Star";
import { Box, Paper, Rating } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import DynamicImage from "../modules/DynamicImage";
// import oppenheimer from "../data/images/oppenheimer.jpg"

const CollapsedCard = ({ item }) => {
  const theme = useTheme();

  const imageStyle = {
    width: '2.75em',
    borderRadius: '5px',
  };

  return (
    <Paper
      sx={{
        margin: "0.5em",
        width: "4em",
        height: "8em",
        backgroundColor: theme.colours.beige1,
        display: "flex",
        flexDirection: "column", // Change to column to stack items vertically
        alignItems: "center", // Align items to the center of the column
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StarIcon style={{ color: theme.colours.gold }} />
        <span>{Math.round(item.rating)}/10</span>
      </div>
      <DynamicImage imageName={item.poster} style={imageStyle}/>
    </Paper>
  );
};

export default CollapsedCard;
