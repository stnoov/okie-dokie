import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#E2F0F9",
    },
    secondary: {
      main: "#DF4C73",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "serif"].join(","),
    fontSize: 14,
  },
});
