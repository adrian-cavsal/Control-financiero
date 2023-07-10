import { Navigate, RouteObject, useRoutes } from "react-router-dom";

// import { useAuth } from '@/lib/auth'
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  //   const { isAuthenticated } = useAuth()

  const commonRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Navigate to="/inicio" replace />,
    },
  ];

  //   const routes = isAuthenticated ? protectedRoutes : publicRoutes
  const routes = publicRoutes;
  const element = useRoutes([...commonRoutes, ...routes]);

  return <>{element}</>;
};
