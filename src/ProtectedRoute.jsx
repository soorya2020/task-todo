import { Navigate } from "react-router-dom";
import { ROUTES } from "./constants";
import { useUser } from "./context/UserContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    // Redirect them to the login page if not logged in
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute;
