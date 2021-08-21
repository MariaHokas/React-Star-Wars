import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Header } from "./Components/Header/";
import { FilmsPage } from "./Pages";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <FilmsPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
