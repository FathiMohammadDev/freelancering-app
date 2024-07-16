import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContainer from "./features/auth/AuthContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContainer />;
    </QueryClientProvider>
  );
}

export default App;
