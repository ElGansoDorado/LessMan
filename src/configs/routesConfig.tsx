import { Route, createBrowserRouter, createRoutesFromElements } from "react-router";
import { getAllPosts, getPoster } from "../api/getPosts";
import { register, logout, login, onlyLoggedOut } from "../api/auth";


import App from "../App";
import Profile from "../pages/Profile/Profile";
import Posters from "../pages/Posters/Posters";
import SinglePoster from "../pages/SinglePoster/SinglePoster";

import Authentication from "../pages/Authentication/Authentication";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";

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