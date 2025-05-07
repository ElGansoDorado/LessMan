import './Authentication.css'

import { Outlet } from "react-router"

export default function Authentication() {
    return <div className='authentication'>
        <div className='container'></div>
            <Outlet />
    </div>
}