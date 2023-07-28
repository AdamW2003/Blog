import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Box, Rating, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import DateFormatter from "../modules/DateFormatter";
import DynamicImage from "../modules/DynamicImage";
import StarIcon from "@mui/icons-material/Star";

const ArticleContent = ({ item }) => {
  const theme = useTheme();
  const isScreenBelow600px = useMediaQuery(theme.breakpoints.up("sm")); // Adjust the breakpoint as needed

  const rating = Math.round(item.rating / 0.5) * 0.5;

  return (
    <React.Fragment>
      <Typography sx={{ fontWeight: "bold", fontSize: isScreenBelow600px ? "4em" : "2em", wordWrap: "break-word" }}>
        {item.title}
      </Typography>
      <Typography sx={{ fontSize: isScreenBelow600px ? "3em" : "1em", wordWrap: "break-word" }}>
        {item.director}
      </Typography>
      <Typography sx={{ fontSize: isScreenBelow600px ? "2em" : "1em", }}>
        {DateFormatter(item.releaseDate)}
      </Typography>
      <Box>
        <Rating
          name="text-feedback"
          value={rating}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {isScreenBelow600px && <Box>{theme.labels[rating]}</Box>}
      </Box>
    </React.Fragment>
  );
};

export default ArticleContent;
