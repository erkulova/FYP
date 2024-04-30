import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ADMIN_ROUTES } from "./AdminRoutes";
import { USER_ROUTES } from "./UserRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/home/Home";
import { ROLES, ROUTES } from "./routes";
import useAuth from "../utils/hooks/useAuth";

const AdminLayout = lazy(() => import("../pages/admin/AdminLayout"));
const UserLayout = lazy(() => import("../pages/user/UserLayout"));

const AppRoutes = () => {
  const { role } = useSelector((state) => state.auth);

  const { isAuth } = useAuth();

  const router = createBrowserRouter([
    {
      path: ROUTES.ADMIN.INDEX,
      element: (
        <PrivateRoutes
          roles={[ROLES.ADMIN]}
          fallBackPath="/"
          component={
            <Suspense fallback="loading">
              <AdminLayout />
            </Suspense>
          }
          role={role}
          isAuth={isAuth}
        />
      ),

      children: ADMIN_ROUTES,
    },

    {
      path: ROUTES.USER.INDEX,
      element: (
        <PrivateRoutes
          roles={[ROLES.USER]}
          fallBackPath="/admin"
          component={
            <Suspense fallback="loading">
              <UserLayout />
            </Suspense>
          }
          role={role}
          isAuth={isAuth}
        />
      ),

      children: USER_ROUTES,
    },

    {
      path: "/",
      element:
        role === "ADMIN" ? (
          <Navigate to="/admin" />
        ) : role === "USER" ? (
          <Navigate to="/user" />
        ) : (
          <Home />
        ),
    },
    
    { path: "*", element: "not foung" },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
