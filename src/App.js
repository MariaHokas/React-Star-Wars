import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@material-ui/core/styles";

import { FilmsPage } from "./Pages";
import { theme } from "./Helpers";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <FilmsPage />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
