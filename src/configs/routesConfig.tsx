import { Route, createBrowserRouter, createRoutesFromElements } from "react-router";
import { getAllPosts, getPoster } from "../api/getPosts";
import { register, logout, login, onlyLoggedOut } from "../api/auth";


import App from "../App";
import Profile from "../pages/profile/Profile";
import Posters from "../pages/posters/Posters";
import SinglePoster from "../pages/singlePoster/SinglePoster";

import Authentication from "../pages/authentication/Authentication";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="profile" element={<Profile />} />
      <Route path="poster" element={<Posters />} loader={getAllPosts} />
      <Route path=":id" element={<SinglePoster />} loader={getPoster} />

      <Route path="logout" loader={logout} />
      <Route path="authentication" element={<Authentication />}>
        <Route path="sign-up" element={<SignUp />} loader={onlyLoggedOut} action={register} />
        <Route path="sign-in" element={<SignIn />} loader={onlyLoggedOut} action={login} />

      </Route>
    </Route>
  )
)
export default router;