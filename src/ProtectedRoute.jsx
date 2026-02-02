import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Replace this with your actual auth logic (e.g., localStorage or Context)
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  if (isAuthenticated) {
    // Redirect them to the login page if not logged in
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
