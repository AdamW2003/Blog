import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import DynamicImage from "../modules/DynamicImage";
import DateFormatter from "../modules/DateFormatter";

const RightArtical = ({item}) => {
  const theme = useTheme();

  const imageStyle = {
    height: "94%",
    borderRadius: "5px",
    display: "block",
    margin: "auto 1em auto auto",
  };

  return (
    <React.Fragment>
      <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>
      <Typography>{DateFormatter(item.date)}</Typography>
      <DynamicImage imageName={item.poster} style={imageStyle} />
    </React.Fragment>
  );
};

export default RightArtical;
