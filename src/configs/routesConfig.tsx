import { Route, createBrowserRouter, createRoutesFromElements } from "react-router";
import { getAllPosts, getPoster } from "../api/getPosts";

import App from "../App";
import Profile from "../pages/Profile/Profile";
import Posters from "../pages/Posters/Posters";
import SinglePoster from "../pages/SinglePoster/SinglePoster";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/poster" loader={getAllPosts} element={<Posters />}/>
      <Route path=":id" loader={getPoster} element={<SinglePoster />}/>
    </Route>
  )
)
export default router;