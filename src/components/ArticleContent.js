import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Box, Rating, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import DateFormatter from "../modules/DateFormatter";
import DynamicImage from "../modules/DynamicImage";
import StarIcon from "@mui/icons-material/Star";

const ArticleContent = ({ item }) => {
  const theme = useTheme();

  const rating = Math.round(item.rating / 0.5) * 0.5

  return (
    <React.Fragment>
      <Typography sx={{ fontWeight: "bold", fontSize: "3em" }}>
        {item.title}
      </Typography>
      <Typography sx={{fontSize: "2em"}}>{item.director}</Typography>
      <Typography sx={{fontSize: "2em"}}>{DateFormatter(item.releaseDate)}</Typography>
      <Box>
      <Rating
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        max={10}

      />
      <Box>{theme.labels[rating]}</Box>
      </Box>

    </React.Fragment>
  );
};

export default ArticleContent;
