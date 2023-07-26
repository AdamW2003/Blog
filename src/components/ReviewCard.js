import StarIcon from '@mui/icons-material/Star';
import { Paper, Rating } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const ReviewCard = ({item}) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        height: "10em",
        width: "90%",
        margin: "1em",
        backgroundColor: theme.colours.beige1,
      }}
    >
      <Rating
        name="text-feedback"
        value={item.rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Paper>
  );
};

export default ReviewCard;
