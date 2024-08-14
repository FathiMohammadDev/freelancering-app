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
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import UsersPage from "./pages/UsersPage";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./layouts/Layout";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/complete-profile", element: <CompleteProfilePage /> },
  {
    path: "/owner",
    element: (
      <ProtectedRoutes>
        <Layout />
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
        <Layout />
      </ProtectedRoutes>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <FreelancerDashboard /> },
      { path: "projects", element: <FreelancerProjectsPage /> },
      { path: "proposals", element: <ProposalsPage /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoutes>
        <Layout />
      </ProtectedRoutes>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <AdminDashboardPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:id", element: <ProjectPage /> },
      { path: "proposals", element: <ProposalsPage /> },
      { path: "users", element: <UsersPage /> },
      { path: "category", element: <CategoryPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
