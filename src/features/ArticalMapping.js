import React, { useContext, useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ReviewCard from "../components/ReviewCard";
import { ArticleContext } from "../data/ArticleContext";

const ArticalMapping = ({ sortDate, sortRating }) => {
  const { articles } = useContext(ArticleContext);
  const [originalArticles, setOriginalArticles] = useState(articles);

  useEffect(() => {
    setOriginalArticles(articles);
  }, [sortDate, sortRating]);

  const sortedArticles = originalArticles.slice().sort((a, b) => {
    if (sortDate !== null) {
      if (sortDate === 'newest') {
        return (
          (b.date === null ? 1 : new Date(b.date)) - (a.date === null ? 1 : new Date(a.date))
        );
      } else {
        return (
          (a.date === null ? 1 : new Date(a.date)) - (b.date === null ? 1 : new Date(b.date))
        );
      }
    }

    if (sortRating !== null) {
      if (sortRating === 'highest') {
        return (b.rating || 0) - (a.rating || 0);
      } else {
        return (a.rating || 0) - (b.rating || 0);
      }
    }

    return 0;
  });

  return (
    <div>
      {/* <button onClick={toggleSortDate}>Toggle Date Sorting</button>
        <button onClick={toggleSortRating}>Toggle Rating Sorting</button> */}
      {sortedArticles.map((content, index) => (
        <ReviewCard key={index} item={content} />
      ))}
    </div>
  );
};

export default ArticalMapping;
