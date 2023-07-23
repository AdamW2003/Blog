import React from 'react';
import { Box, Button, styled } from '@mui/material';
import { GridViewSharp, FavoriteSharp, PersonSharp } from '@mui/icons-material';

let SideBar = () => {
  return (
    <Box className="side-bar">
      <Button
        startIcon={<GridViewSharp />}
        variant="contained"
        className="button"
      >
        Dashboard
      </Button>
      <Button
        startIcon={<FavoriteSharp />}
        variant="contained"
        className="button"
      >
        Favorites
      </Button>
      <Button
        startIcon={<PersonSharp />}
        variant="contained"
        className="button"
      >
        Profile
      </Button>
    </Box>
  );
};

SideBar = styled(SideBar)(() => ({
  ".side-bar": {
    backgroundColor: '#007BFF',
    width: '200px',
    height: '200px',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ".button": {
    width: '100%',
    justifyContent: 'flex-start',
    color: 'white',
  },
}));

export default SideBar;
