import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#E2F0F9",
      dark: "#286FB4",
    },
    secondary: {
      main: "#DF4C73",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "serif"].join(","),
    fontSize: 14,
    h6: {
      fontFamily: ["Bangers", "serif"].join(","),
      fontSize: 36,
      letterSpacing: 1.5,
    },
  },
});