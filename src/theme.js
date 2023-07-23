import { createTheme } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';

const customVars = {
  colours: {
    grey:'#EAE7DC',
    beige:'#D8C3A5',
    darkRed:'#E85A4F',
    lightRed:'#E98074',
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: customVars.colours.grey,
    },
    secondary: {
      main: customVars.colours.beige,
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#333',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
      },
      containedPrimary: {
        color: customVars.colours.lightRed,
        backgroundColor: customVars.colours.grey,
      },
      containedSecondary: {
        color: customVars.colours.darkRed,
        backgroundColor: customVars.colours.lightRed,
      },
    },
  },
});

export default theme;
