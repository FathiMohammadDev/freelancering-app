import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CompleteProfilePage from "./pages/CompleteProfilePage";
import OwnerLayout from "./layouts/OwnerLayout";
import OwnerDashboardPage from "./pages/OwnerDashboardPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import FreelancerLayout from "./layouts/FreelancerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import ProposalsPage from "./pages/ProposalsPage";
import FreelancerProjectsPage from "./pages/FreelancerProjectsPage";
import ProtectedRoutes from "./ui/ProtectedRoutes";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/complete-profile", element: <CompleteProfilePage /> },
  {
    path: "/owner",
    element: (
      <ProtectedRoutes>
        <OwnerLayout />
      </ProtectedRoutes>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <OwnerDashboardPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:id", element: <ProjectPage /> },
    ],
  },
  {
    path: "/freelancer",
    element: (
      <ProtectedRoutes>
        <FreelancerLayout />
      </ProtectedRoutes>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <FreelancerDashboard /> },
      { path: "projects", element: <FreelancerProjectsPage /> },
      { path: "proposals", element: <ProposalsPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
