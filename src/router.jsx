import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage"
import CompleteProfilePage from "./pages/CompleteProfilePage"

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/complete-profile", element: <CompleteProfilePage /> },
  { path: "*", element: <NotFoundPage /> },
]);
