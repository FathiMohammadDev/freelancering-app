import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import DarkModeProvider from "./context/DarkModeContext";
const queryClient = new QueryClient();
document.title = "ProjectMroject"

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
