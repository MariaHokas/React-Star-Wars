import { createTheme } from "@material-ui/core/styles";
export const theme = createTheme({
  typography: {
    fontFamily: ["BenchNine", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#ff0000",
      "&:hover": {
        backgroundColor: "#8F00FF",
      },
    },
    secondary: {
      main: "#003366",
    },
  },
});
