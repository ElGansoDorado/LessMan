import './App.css'

import { Outlet } from 'react-router'
import { useState, useEffect } from 'react';
import { setStateChangeHandler } from './api/auth';
import { UserInfo } from "firebase/auth";
import Header from './components/Header/Header'

function App() {
  const [user, setUser] = useState<UserInfo>();

  const authStateChanged = (__user : any)  => {
    setUser(__user);
  };

  useEffect(() => {
    const unsubscribe = setStateChangeHandler(authStateChanged);
    return () => { unsubscribe() };
  }, []);

  return (
    <>
      <Header user={user as UserInfo}/>

      <main>
        <Outlet/>
      </main>
      
      <footer>footer</footer>
    </>
  )
}

export default App
