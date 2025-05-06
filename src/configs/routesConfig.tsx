import { Route, createBrowserRouter, createRoutesFromElements } from "react-router";
import { getAllPosts, getPoster } from "../api/getPosts";
import { register, logout, onlyLoggedOut } from "../api/auth";


import App from "../App";
import Profile from "../pages/Profile/Profile";
import Posters from "../pages/Posters/Posters";
import SinglePoster from "../pages/SinglePoster/SinglePoster";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="profile" element={<Profile />}/>
      <Route path="poster" element={<Posters />} loader={getAllPosts}/>
      <Route path=":id" element={<SinglePoster />} loader={getPoster}/>
      <Route path="sign-up" element={<SignUp />} loader={onlyLoggedOut} action={register} />
      <Route path="logout" loader={logout} />
    </Route>
  )
)
export default router;