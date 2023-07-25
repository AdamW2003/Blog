const styledScrollBar = (theme) => {
    return {
      "::-webkit-scrollbar": {
        width: "20px",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: theme.colours.grey,
        borderRadius: "20px",
        border: "6px solid transparent",
        backgroundClip: "content-box",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: theme.colours.grey2,
      },
    };
  };
  
  export default styledScrollBar;