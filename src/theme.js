import { createTheme } from '@mui/material/styles';

const customVars = {
  drawerWidth: 300,
  colours: {
    beige1:'#EAE7DC',
    beige2:'#D8C3A5',
    grey:'#8E8D8A',
    red1:'#E85A4F',
    red2:'#E98074',
    gold: '#faaf00'
  }
}

const theme = createTheme({
  ...customVars,
  palette: {
    primary: {
      main: customVars.colours.beige1,
    },
    secondary: {
      main: customVars.colours.red1,
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
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        }
      }
    },
    img: {
      borderRadius: "25px",
    },
    MuiButton: {
      root: {
        borderRadius: 8,
      },
      containedPrimary: {
        color: customVars.colours.red1,
        backgroundColor: customVars.colours.grey,
        outline: '1px solid' + customVars.colours.grey,
      },
      containedSecondary: {
        color: customVars.colours.darkRed,
        backgroundColor: customVars.colours.red1,
      },
    },
  },
});

export default theme;
