import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Header } from "./Components/Header/";
import { FilmsPage } from "./Pages";
import { theme } from "./Helpers";
const queryClient = new QueryClient();

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
