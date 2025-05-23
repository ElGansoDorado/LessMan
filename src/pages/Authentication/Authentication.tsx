import './Authentication.css'
import { Outlet } from "react-router"

export default function Authentication() {
    return <div className='authentication'>
        <Outlet />
    </div>
}