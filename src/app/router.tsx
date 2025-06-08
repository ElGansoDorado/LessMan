import { createBrowserRouter, redirect } from "react-router";
import { getPoster } from "@/shared/api/getPosts";
import { register, login, onlyLoggedOut } from "@/shared/api/auth";

import { ROUTES } from "@/shared/model/routes";
import { Providers } from "./providers";
import App from "./app";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        path: ROUTES.EVENTS,
        lazy: () => import("@/features/events-list/events-list.page"),
      },
      {
        path: ROUTES.EVENT,
        lazy: () => import("@/features/event/event.page"),
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
        loader: () => redirect(ROUTES.EVENTS),
      },
    ],
  },
]);
