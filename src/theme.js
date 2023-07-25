import { createTheme } from '@mui/material/styles';

const customVars = {
  colours: {
    beige1:'#EAE7DC',
    beige2:'#D8C3A5',
    grey:'#8E8D8A',
    darkRed:'#E85A4F',
    lightRed:'#E98074',
  }
}

const theme = createTheme({
  ...customVars,
  palette: {
    primary: {
      main: customVars.colours.beige1,
    },
    secondary: {
      main: customVars.colours.lightRed,
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
    MuiButton: {
      root: {
        borderRadius: 8,
      },
      containedPrimary: {
        color: customVars.colours.lightRed,
        backgroundColor: customVars.colours.grey,
        outline: '1px solid' + customVars.colours.grey,
      },
      containedSecondary: {
        color: customVars.colours.darkRed,
        backgroundColor: customVars.colours.lightRed,
      },
    },
  },
});

export default theme;
