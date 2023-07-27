import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import DateFormatter from "../modules/DateFormatter";
import DynamicImage from "../modules/DynamicImage";

const LeftArtical = ({ item }) => {
  const theme = useTheme();

  const imageStyle = {
    height: "94%",
    borderRadius: "5px",
    display: "block",
    margin: "auto auto auto 1em",
  };

  return (
    <React.Fragment>
      <DynamicImage imageName={item.poster} style={imageStyle} />
      <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>
      <Typography>{DateFormatter(item.date)}</Typography>
    </React.Fragment>
  );
};

export default LeftArtical;
