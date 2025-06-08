import { Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { UserInfo } from "firebase/auth";
import { setStateChangeHandler } from "@/shared/api/auth";
import { ROUTES } from "@/shared/model/routes";
import Header from "@/features/header";

function App() {
  const location = useLocation();
  const [user, setUser] = useState<UserInfo>();

  const authStateChanged = (__user: any) => {
    setUser(__user);
  };

  const isAuthPage = location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER;

  useEffect(() => {
    const unsubscribe = setStateChangeHandler(authStateChanged);
    return () => {
      unsubscribe();
    };
  }, []);

  return <>
    {!isAuthPage && <Header user={user as UserInfo} />}

    <main>
      <Outlet />
    </main>

    <footer>footer</footer>
  </>
}

export default App;
