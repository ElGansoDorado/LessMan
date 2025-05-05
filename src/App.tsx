import './App.css'

import { Outlet } from 'react-router'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <footer>eret</footer>
    </>
  )
}

export default App
