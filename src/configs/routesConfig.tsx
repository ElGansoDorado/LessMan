import { Route, createBrowserRouter, createRoutesFromElements } from "react-router";

import App from "../App";
import Profile from "../pages/Profile/Profile";
import Posters from "../pages/Posters/Posters";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/poster" element={<Posters />}/>
    </Route>
  )
)
export default router;