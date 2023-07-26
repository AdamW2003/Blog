import { List, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import Logo from "../components/Logo";
import { ArticleContext } from "../data/ArticleContext";

const Content = () => {
  const theme = useTheme();
  const { articles } = useContext(ArticleContext);
  return (
    <React.Fragment>
      <List sx={{ width: "100%" }}>
        <Logo />
        {articles.map((content, index) => {
          var position = Boolean(index % 2);
          return (
            <Paper
              key={content}
              sx={{
                backgroundColor: theme.colours.beige2,
                height: "20vh",
                width: "80%",
                margin: "2em",
                display: "flex",
                marginLeft: position ? "auto" : "1em",
                marginRight: position ? "1em" : "auto",
              }}
            >
              {content.title}
            </Paper>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default Content;
