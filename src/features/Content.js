import { List, Paper } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import React from 'react';


const Content = () => {
  const theme = useTheme();
  return (
    <List sx={{width: "100%"}}>
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((value, index) => {
        var position = Boolean(index % 2);
        return (
          <Paper
            key={value}
            sx={{
              backgroundColor: theme.colours.beige2,
              height: "20vh",
              width: "80%",
              margin: "2em",
              display: "flex",
              marginLeft: position ? "auto" : "2em",
              marginRight: position ? "2em" : "auto",
            }}
          >
            {value}
          </Paper>
        );
      })}
    </List>
  );
};

export default Content;
