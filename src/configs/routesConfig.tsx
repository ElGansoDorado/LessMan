import { Route, createBrowserRouter, createRoutesFromElements } from "react-router";

import App from "../App";
import Profile from "../pages/Profile/Profile";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="/profile" element={<Profile />}/>
    </Route>
  )
)
export default router;