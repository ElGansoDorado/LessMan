import {
  createBrowserRouter,
  redirect,
} from "react-router";
import { getPoster } from "@/shared/api/getPosts";
import {
  register,
  login,
  onlyLoggedOut,
} from "@/shared/api/auth";

import { ROUTES } from "../shared/model/routes";
import App from "./app";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.POSTERS,
        lazy: () => import("@/features/posters-list/posters-list.page"),
      },
      {
        path: ROUTES.POSTER,
        lazy: () => import("@/features/poster/poster.page"),
        loader: getPoster,
      },
      {
        path: ROUTES.PROFILE,
        lazy: () => import("@/features/profile/profile.page"),
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/features/auth/login.page"),
        loader: onlyLoggedOut,
        action: login,
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import("@/features/auth/register.page"),
        loader: onlyLoggedOut,
        action: register,
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.POSTERS),
      },
    ],
  },
]);