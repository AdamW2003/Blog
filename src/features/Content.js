import { List, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import Logo from "../components/Logo";
import { ArticleContext } from "../contexts/ArticleContext";
import ArticalCard from "./ArticleCard";
import ArticalContainer from "./ArticalContainer";

const Content = () => {
  const theme = useTheme();
  const { articles } = useContext(ArticleContext);

  const backgroundStyle = {
    width: "100%",
    backgroundColor: theme.colours.beige1,
    backgroundImage: `
      linear-gradient(90deg, rgba(255, 255, 255, .07) 50%, transparent 50%),
      linear-gradient(90deg, rgba(255, 255, 255, .13) 50%, transparent 50%),
      linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, .17) 50%),
      linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, .19) 50%)
    `,
    backgroundSize: "13px, 29px, 37px, 53px",
  };

  return (
    <React.Fragment>
      <List sx={backgroundStyle}>
        <Logo />
        {articles.slice(0, 50).map((item, index) => {
          var position = Boolean(index % 2);
          return <ArticalContainer item={item} position={position} />;
        })}
      </List>
    </React.Fragment>
  );
};

export default Content;
