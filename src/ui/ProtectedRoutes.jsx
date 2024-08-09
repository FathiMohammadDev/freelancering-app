import { useNavigate } from "react-router-dom";
import { useAuthorize } from "../features/auth/useAuthorize";
import { useEffect } from "react";

const ProtectedRoutes = ({ children }) => {
  const { isLoading, isAuthenticated, isAuthorized } = useAuthorize();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/auth");
    if (!isLoading && !isAuthorized) navigate("/");
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  if (isLoading) return <p>loading...</p>;

  if (isAuthenticated && isAuthorized) return children;
};

export default ProtectedRoutes;
