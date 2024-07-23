import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContainer from "./features/auth/AuthContainer";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage"
const queryClient = new QueryClient();

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
      <AuthContainer />;
    </QueryClientProvider>
  );
}

export default App;
