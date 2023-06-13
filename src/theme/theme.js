import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#ECF4F4",
      },
      secondary:{
        main: "#368A4D"
      },
      common: {
        grey: '#525252'
      }
    },
    typography: {
      fontFamily : 'Cinzel,Lato',
      title: {
        color: "secondary",
        fontStyle: 'normal',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'none'
      },
      tab: {
        fontFamily: "Lato",
        textTransform: "none",
        fontWeight: '700',
      },
      donate: {
        fontFamily: 'Lato',
        textTransform: 'none',
        background: 'linear-gradient(95.32deg, #3F8B4B 45.74%, #ECF4F4 179.28%)',
        boxShadow: '2px 2px 4px rgba(63, 139, 75, 0.3)',
        color: 'white'
      },
      breakpoints: {
        values: {
          mobile: 320
        }
      }
    },
    
  });
