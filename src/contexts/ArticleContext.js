import React, { createContext, useState } from 'react';
import articleData from '../data/articleData';

const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState(articleData);

  return (
    <ArticleContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleProvider };
