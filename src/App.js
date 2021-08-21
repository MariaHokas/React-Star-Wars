import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Header } from "./Components/Header/";
import { FilmsPage } from "./Pages";
const queryClient = new QueryClient();
const theme = createTheme({
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
      main: "#8F00FF",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <FilmsPage />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
