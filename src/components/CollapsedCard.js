import StarIcon from "@mui/icons-material/Star";
import { Box, Paper, Rating } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import DynamicImage from "../modules/DynamicImage";
// import oppenheimer from "../data/images/oppenheimer.jpg"

const CollapsedCard = ({ item }) => {
  const theme = useTheme();

  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageModule = import("../images/oppenheimer.jpg");
        setImage(imageModule.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, []);

  return (
    <Paper
      sx={{
        margin: "0.5em",
        width: "4em",
        backgroundColor: theme.colours.beige1,
        display: "flex",
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
        {/* {image && <Box
          sx={{ height: "90%", width: "90%", margin: "0.5em" }}
          component="img"
          alt="Poster Image"
          src={image}
        />} */}
        {/* <DynamicImage imageName={item.poster} /> */}
        <DynamicImage imageName={"indianajones.jpg"} />
      </div>
    </Paper>
  );
};

export default CollapsedCard;
