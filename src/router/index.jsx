import { createBrowserRouter, Navigate } from "react-router-dom";
import Authentication from "../Components/Authentication";
import Todo from "../Components/Todo";
import MainLayout from "../Components/MainLayout";
import NotFound from "../Components/NotFound";
import CreateTodo from "../Components/CreateTodo";
import LandingPage from "../Components/LandingPage";
import ProtectedRoute from "../ProtectedRoute";
import { ROUTES } from "../constants";

const router = createBrowserRouter([
  // LANDING: Outside MainLayout (Clean slate)
  {
    path: ROUTES.LANDING,
    element: <LandingPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Authentication />,
  },

  // PROTECTED APP SPACE: Inside MainLayout
  {
    path: ROUTES.APP,
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // Handle "/app" directly
        element: <Navigate to={ROUTES.TODOS} replace />,
      },

      {
        path: "todos",
        element: (
          <ProtectedRoute>
            <CreateTodo />
          </ProtectedRoute>
        ),
      },
      {
        path: "todo/:id",
        element: (
          <ProtectedRoute>
            <Todo />
          </ProtectedRoute>
        ),
      },
    ],
  },

  // GLOBAL 404: Outside MainLayout
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
