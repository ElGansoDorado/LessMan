import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import { getAllPosts, getPoster } from "@/shared/api/getPosts";
import {
  register,
  logout,
  login,
  onlyLoggedOut,
  getUserInfo,
  updateUserInfo,
} from "@/shared/api/auth";

import App from "./App";
import Profile from "@/pages/profile/Profile";
import Settings from "@/pages/settings/Settings";
import Posters from "@/pages/posters/Posters";
import SinglePoster from "@/pages/singlePoster/SinglePoster";

import Authentication from "@/pages/authentication/Authentication";
import SignUp from "@/pages/signUp/SignUp";
import SignIn from "@/pages/signIn/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="profile" element={<Profile />} />
      <Route
        path="settings"
        element={<Settings />}
        loader={getUserInfo}
        action={updateUserInfo}
      />
      <Route path="poster" element={<Posters />} loader={getAllPosts} />
      <Route path=":id" element={<SinglePoster />} loader={getPoster} />

      <Route path="logout" loader={logout} />
      <Route path="auth" element={<Authentication />}>
        <Route
          path="sign-up"
          element={<SignUp />}
          loader={onlyLoggedOut}
          action={register}
        />
        <Route
          path="sign-in"
          element={<SignIn />}
          loader={onlyLoggedOut}
          action={login}
        />
      </Route>
    </Route>,
  ),
);
export default router;
