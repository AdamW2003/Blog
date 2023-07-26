import { List, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext, useRef } from "react";
import Logo from "../components/Logo";
import { ArticleContext } from "../contexts/ArticleContext";
import ArticalCard from "./ArticleCard";

const Content = () => {
  const theme = useTheme();
  const { articles } = useContext(ArticleContext);

  return (
    <React.Fragment>
      <List sx={{ width: "100%" }}>
        <Logo />
        {articles.map((content, index) => {
          var position = Boolean(index % 2);
          return <ArticalCard content={content} position={position} />;
        })}
      </List>
    </React.Fragment>
  );
};

export default Content;
