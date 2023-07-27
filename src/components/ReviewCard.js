import StarIcon from "@mui/icons-material/Star";
import { Box, Paper, Rating, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import DynamicImage from "../modules/DynamicImage";
import DateFormatter from "../modules/DateFormatter";

const ReviewCard = ({ item }) => {
  const theme = useTheme();

  const imageStyle = {
    width: "4.8em",
    borderRadius: "5px",
  };

  return (
    <Paper
      sx={{
        height: "10em",
        width: "90%",
        margin: "1em",
        backgroundColor: theme.colours.beige1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Rating
        name="text-feedback"
        value={item.rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        max={10}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "0.5em",
        }}
      >
        <DynamicImage imageName={item.poster} style={imageStyle} />
        <Box
          sx={{
            paddingLeft: "1em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>
          <Typography>{DateFormatter(item.date)}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ReviewCard;
