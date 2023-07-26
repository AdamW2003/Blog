import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const Logo = () => {
  const theme = useTheme();
  return (
    <Box sx={{ textAlign: "center" }}>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor={theme.colours.red2} />
          <stop offset={1} stopColor={theme.colours.red1} />
        </linearGradient>
      </svg>
      <BlurOnIcon
        sx={{
          fontSize: "45em",
          fill: "url(#linearColors)",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          paddingTop: "3em",
          fontSize: "6em", 
          opacity: 0.7,
        }}
      >
        Media Musings
      </Typography>
    </Box>
  );
};


export default Logo;
